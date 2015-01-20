/*!
 * helper-lookup <https://github.com/jonschlinkert/helper-lookup>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var Lookup = require('lookup-deps');
var deps = new Lookup();

module.exports = function (options) {
  var helpers = {};

  for (var key in deps) {
    var fn = deps[key];

    if (typeof fn === 'function') {
      helpers[key] = function () {
        return fn.apply(deps, arguments);
      };
    }
  }

  return helpers;
};
