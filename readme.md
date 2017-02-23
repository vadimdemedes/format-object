# format-object [![Build Status](https://travis-ci.org/vadimdemedes/format-object.svg?branch=master)](https://travis-ci.org/vadimdemedes/format-object)

> `util.format` with object instead of argument list.


## Installation

```
$ npm install --save format-object
```


## Usage

```js
const format = require('format-object');

format('Hello, :name', {name: 'Joe'});
// => 'Hello, Joe'
```


## API

### formatObject(input, params)

#### input

Type: `string`

Input string.

#### params

Type: `object`

Object of params to replace.

## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
