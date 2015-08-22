'use strict';

/**
 * Expose format-object
 */

module.exports = format;


/**
 * Format string with keys and values
 */

function format (str, params) {
  let keys = Object.keys(params);

  keys.forEach(function (key) {
    let value = params[key];

    str = str.replace(':' + key, value);
  });

  return str;
}
