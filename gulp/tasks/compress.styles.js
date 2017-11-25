'use strict';

module.exports = function() {
  $.gulp.task('compress:styles', function() {
    return $.gulp.src($.config.path.build + '/assets/css/*.css')
      .pipe($.mmq())
      .pipe($.gp.csso())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gp.size({
          title: 'Размер',
          showFiles: true,
          showTotal: false,
      }))
      .pipe($.gulp.dest($.config.path.build + '/assets/css'));
  });
};
