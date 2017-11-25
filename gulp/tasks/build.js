'use strict';

module.exports = function() {
  $.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
      'styles',
      'templates',
      'scripts',
      'vendor:styles',
      'vendor:scripts',
      'sprite:svg',
      'sprite:png',
      'copy:images',
      'copy:font',
      'copy:public'
    ),
    'compress',
    'serviceWorker'
  ));
};
