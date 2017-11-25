'use strict';

module.exports = function() {
  $.gulp.task('vendor:scripts', function() {
    return $.gulp.src($.config.path.vendorScripts)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gulp.dest($.config.path.build + '/assets/js'));
  });
};
