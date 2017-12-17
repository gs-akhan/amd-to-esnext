var log = console.log;
export default function(babel) {
	const { types: t } = babel;
	return {
		name: "ast-transform", // not required
		visitor: {
			CallExpression(path) {
				if (path.node.callee.name === "define") {
					var importsArray = path.node.arguments[0].elements.map(
						item => item.value
					);

					var functionExpresion = path.node.arguments[1];
					var argumentsArray = functionExpresion.params.map(item => item.name);
					var importsRedifined = [];

					log(functionExpresion.body.body[1]);
					argumentsArray.forEach((item, iter) => {
						let importStatement = t.importDeclaration(
							[t.importDefaultSpecifier(t.identifier(item))],
							t.stringLiteral(importsArray[iter])
            );
            
            importsRedifined.push(importStatement);
						// importsRedifined.push(
						// 	t.variableDeclarator(
						// 		t.identifier(item),
						// 		t.callExpression(t.identifier("require"), [
						// 			t.stringLiteral(importsArray[iter])
						// 		])
						// 	)
						// );
					});
					//Create variables on top
					path.insertBefore(importsRedifined);
					path.insertBefore(functionExpresion.body.body);
					path.remove();
				}
			}
		}
	};
}
