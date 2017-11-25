'use strict';

module.exports = function() {
  let filePath = process.cwd() + '/tmp/scripts.json';

  let lintReporter = function (errors) {
    if (errors.length) {
      if (!$.fs.existsSync('tmp')) {
        $.fs.mkdirSync('tmp');
      }
      $.fs.writeFileSync(filePath, JSON.stringify(errors));
    }
  }

  $.gulp.task('lint:scripts', function() {
    return $.gulp.src($.config.path.lintScripts)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format(lintReporter))
      .pipe($.gp.eslint.format());
  });
};
