# babel-plugin-amd-to-esnext

Converts AMD to ESnext modules

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-amd-to-esnext
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["amd-to-esnext"]
}
```

### Via CLI

```sh
$ babel --plugins amd-to-esnext script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["amd-to-esnext"]
});
```
