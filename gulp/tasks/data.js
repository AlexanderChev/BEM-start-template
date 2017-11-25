'use strict';

module.exports = function () {
  $.gulp.task('data', function () {
    return $.gulp.src($.config.path.blocksData)
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function (error) {
          return {
            title: 'Data',
            message: error.message
          }
        })
      }))
      .pipe($.gp.mergeJson({
        fileName: 'data.json',
        jsonSpace: '  '
      }))
      .pipe($.gulp.dest('tmp'));
  });
};
