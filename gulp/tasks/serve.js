'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: true,
      server: $.config.path.build,
      port: 8000
    });

    $.browserSync.watch([$.config.path.build + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
