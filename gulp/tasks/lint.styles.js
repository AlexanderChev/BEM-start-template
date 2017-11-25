'use strict';

module.exports = function() {
  $.gulp.task('lint:styles', function() {
    return $.gulp.src($.config.path.lintStyles)
      .pipe($.styleLint({
        failAfterError: false,
        reportOutputDir: 'tmp',
        reporters: [
          {formatter: 'verbose', console: true},
          {formatter: 'json', save: 'styles.json'}
        ],
        debug: true
      }));
  })
};
