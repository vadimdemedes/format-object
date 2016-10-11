'use strict';

function formatObject (str, params) {
  var keys = Object.keys(params);

  keys.forEach(function (key) {
    var value = params[key];

    str = str.replace(':' + key, value);
  });

  return str;
}

module.exports = formatObject;
