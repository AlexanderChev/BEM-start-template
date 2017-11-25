'use strict';

module.exports = function() {
  $.gulp.task('copy:font', function() {
    return $.gulp.src($.config.path.fonts)
      .pipe($.gp.newer($.config.path.build + '/assets/fonts'))
      .pipe($.gulp.dest($.config.path.build + '/assets/fonts'));
  });
};
