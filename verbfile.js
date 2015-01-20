'use strict';

var verb = require('verb');

var helpers = require('./');
verb.helper(helpers());
// console.log(verb)
// for (var helper in helpers) {
//   try {
//     verb.helpers(helper, helpers[helper]);
//   } catch(err) {
//     console.log(err)
//   }
// }

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
