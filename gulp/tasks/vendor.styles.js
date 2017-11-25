'use strict';

module.exports = function() {
  $.gulp.task('vendor:styles', function() {
    return $.gulp.src($.config.path.vendorStyles)
      .pipe($.gp.concat('vendor.css'))
      .pipe($.gulp.dest($.config.path.build + '/assets/css'))
  })
};
