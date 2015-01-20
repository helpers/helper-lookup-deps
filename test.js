/*!
 * helper-lookup <https://github.com/jonschlinkert/helper-lookup>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var handlebars = require('handlebars');
var _ = require('lodash');
var lookup = require('./')();

function test(str) {
  // is there text?
  return /[abc]/.test(str);
}

describe('helper lookup', function () {
  it('should return a formatted lookup statement:', function () {
    test(lookup.reflinks('*')).should.be.true;
  });

  it('should work as a lodash helper:', function () {
    test(_.template('<%= reflinks %>', {}, {imports: {reflinks: lookup.reflinks('*')}})).should.be.true;
    test(_.template('<%= lookup.reflinks("*") %>', {}, {imports: {lookup: lookup}})).should.be.true;
  });

  it('should work as a lodash helper:', function () {
    test(_.template('<%= links %>', {}, {imports: {links: lookup.links('*')}})).should.be.true;
    test(_.template('<%= lookup.links("*") %>', {}, {imports: {lookup: lookup}})).should.be.true;
  });

  it('should work as a lodash mixin:', function () {
    _.mixin({reflinks: lookup.reflinks});
    test(_.template('<%= _.reflinks("*") %>', {})).should.be.true;
  });

  // it('should work as a handlebars helper:', function () {
  //   handlebars.registerHelper(lookup);
  //   // console.log(handlebars.compile('{{reflinks "*"}}')())
  //   console.log(handlebars.compile('{{links "*"}}')())
  //   // test(handlebars.compile('{{reflinks "*"}}')()).should.be.true;
  // });

  // it('should work as a handlebars helper:', function () {
  //   handlebars.registerHelper('reflinks', lookup.reflinks);
  //   test(handlebars.compile('{{reflinks "*"}}')()).should.be.true;
  // });

  // it('should work as a handlebars helper:', function () {
  //   handlebars.registerHelper('links', lookup.links);
  //   test(handlebars.compile('{{links "*"}}')()).should.be.true;
  // });
});