'use strict';

module.exports = function() {
  $.gulp.task('copy:public', function() {
    return $.gulp.src($.config.path.public, { since: $.gulp.lastRun('copy:public') })
      .pipe($.gp.newer($.config.path.build + '/'))
      .pipe($.gulp.dest($.config.path.build + '/'));
    });
};
