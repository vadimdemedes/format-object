# format-object

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

```
$ make test
```


### License

format-object is released under the MIT license.
