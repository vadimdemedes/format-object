# format-object [![Circle CI](https://circleci.com/gh/vdemedes/format-object.svg?style=svg)](https://circleci.com/gh/vdemedes/format-object)

`util.format` with object instead of argument list.


### Installation

```
$ npm install format-object --save
```


### Usage

```javascript
const format = require('format-object');

format('Hello, :name', {
  name: 'Joe'
}); // => 'Hello, Joe'
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/format-object.svg?style=svg)](https://circleci.com/gh/vdemedes/format-object)

```
$ make test
```


### License

format-object is released under the MIT license.
