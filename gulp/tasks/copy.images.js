'use strict';

module.exports = function() {
  $.gulp.task('copy:images', function() {
    return $.gulp.src($.config.path.images, { since: $.gulp.lastRun('copy:images') })
      .pipe($.gp.newer($.config.path.build + '/assets/images'))
      .pipe($.gulp.dest($.config.path.build + '/assets/images'));
  });
};
