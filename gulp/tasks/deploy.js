'use strict';

function buildDeploy(cb)  {
  return $.gulp.src($.config.path.build + '/**/*.*')
    .pipe($.gp.ghPages({branch: 'build'}));
    cb();
}

module.exports = function () {
  $.gulp.task('deploy', $.gulp.series(
    'build',
    buildDeploy
  ));
};
