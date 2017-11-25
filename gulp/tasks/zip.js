'use strict';

function buildZip(cb) {
  $.gulp.src($.config.path.build + '/**/*.*')
    .pipe($.gp.zip('build.zip'))
    .pipe($.gulp.dest('zip'));
    cb();
}

module.exports = function () {
  $.gulp.task('zip', $.gulp.series(
    'build',
    buildZip
  ));
};
