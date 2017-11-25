'use strict';

module.exports = function () {
  $.gulp.task('compress:images', function () {
    return $.gulp.src([$.config.path.build + '/assets/images/*.{jpg,jpeg,gif,png,svg}', '!' + $.config.path.build + '/assets/images/sprite.{svg,png}'])
      .pipe($.gp.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true,
        multipass: true,
        svgoPlugins: [
          {
            cleanupIDs: false,
            removeViewBox: false
          }
        ]
      }))
      .pipe($.gulp.dest($.config.path.build + '/assets/images'));
  });
};
