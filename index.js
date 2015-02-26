/*!
 * helper-lookup-deps <https://github.com/helpers/helper-lookup-deps>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var Lookup = require('lookup-deps');
var deps = new Lookup();

exports.depsKeys = function(patterns) {
  return deps.depsKeys(patterns || '*');
};

exports.findPkg = function(patterns) {
  return deps.findPkg(patterns || '*');
};

exports.parent = function(patterns) {
  return deps.parent(patterns || '*');
};

exports.filter = function(patterns) {
  return deps.filter(patterns || '*');
};

exports.getParents = function(patterns) {
  return deps.getParents(patterns || '*');
};

exports.names = function(patterns) {
  return deps.names(patterns || '*');
};

exports.find = function(patterns) {
  return deps.find(patterns || '*');
};

exports.lookup = function(patterns) {
  return deps.lookup(patterns || '*');
};

exports.pkg = function(patterns) {
  return deps.pkg(patterns || '*');
};

exports.dependencies = function(patterns) {
  return deps.dependencies(patterns || '*');
};

exports.keywords = function(patterns) {
  return deps.keywords(patterns || '*');
};

exports.homepage = function(patterns) {
  return deps.homepage(patterns || '*');
};

exports.links = function(patterns) {
  return deps.links(patterns || '*');
};

exports.reflinks = function(patterns) {
  return deps.reflinks(patterns || '*');
};
