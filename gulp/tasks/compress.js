'use strict';

module.exports = function () {
  $.gulp.task('compress', $.gulp.parallel(
    'compress:images',
    'compress:styles',
    'compress:scripts'
  ));
};
