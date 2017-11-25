'use strict';

module.exports = function () {
  $.gulp.task('lint', $.gulp.parallel(
    'lint:templates',
    'lint:scripts',
    'lint:styles'
  ));
};
