'use strict';

var verb = require('verb');
verb.helpers(require('./'));

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
