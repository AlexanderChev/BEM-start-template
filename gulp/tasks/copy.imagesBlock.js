'use strict';

module.exports = function () {
  const path = require('path');
  $.gulp.task('copy:imagesBlock', function () {
    return $.gulp.src($.config.path.imagesBlock, { since: $.gulp.lastRun('copy:imagesBlock') })
      .pipe($.gp.newer($.config.path.build + '/assets/images'))
      .pipe($.gp.rename(function(file) {
        const f = path.parse(file.dirname);
        const f2 = path.parse(f.dir);
        const moduleName = f2.base;

        file.dirname = '';
        file.basename = moduleName + '__' + file.basename;

      }))
      .pipe($.gulp.dest($.config.path.build + '/assets/images'));
  });
};
