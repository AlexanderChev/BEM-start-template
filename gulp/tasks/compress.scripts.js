'use strict';

module.exports = function () {
  $.gulp.task('compress:scripts', function () {
    return $.gulp.src($.config.path.build + '/assets/js/*.js')
      .pipe($.gp.uglify())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gp.size({
        title: 'Размер',
        showFiles: true,
        showTotal: false,
      }))
      .pipe($.gulp.dest($.config.path.build + '/assets/js'));
  });
};
