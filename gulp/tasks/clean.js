'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    return $.rimraf($.config.path.build, cb);
  });
};
