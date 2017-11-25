'use strict';

module.exports = function() {
  $.gulp.task('default', $.gulp.series(
    'clean',
    'data',
    $.gulp.parallel(
      'styles',
      'templates',
      'scripts',
      'vendor:styles',
      'vendor:scripts',
      'copy:images',
      'copy:font',
      'copy:public',
      'sprite:svg',
      'sprite:png'
    ),

    $.gulp.parallel(
      'watch',
      'serve'
    )
  ));
};
