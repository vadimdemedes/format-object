'use strict';

/**
 * Dependencies
 */

const expect = require('chai').expect;
const format = require('./');


/**
 * Tests
 */

describe ('format-object', function () {

  it ('format with object', function () {
    let input = 'Hello :name, you are :action';
    let output = format(input, {
      name: 'dude',
      action: 'kicking ass'
    });

    expect(output).equal('Hello dude, you are kicking ass');
  });

});
