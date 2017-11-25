'use strict';

module.exports = function () {
  let path = require('path');
  let filePath = process.cwd() + '/tmp/templates.json';

  let lintReporter = function (errors) {
    if (errors.length) {
      if (!$.fs.existsSync('tmp')) {
        $.fs.mkdirSync('tmp');
      }
      $.fs.writeFileSync(filePath, JSON.stringify(errors));
      errors.forEach(function (item) {
        item.column = (item.column === undefined) ? 0 : item.column;
        item.code = item.code.replace(/(PUG:|LINT_)/g, '');
        console.log($.chalk`{underline ${path.relative(process.cwd(), item.filename)}}\n {gray ${item.line}:${item.column}}    {red ✖} ${item.msg}  ${item.code}\n`);
      });
      console.log($.chalk`{red.bold ✖ ${errors.length} problems}`);
    }
  }
  $.gulp.task('lint:templates', function () {
    return $.gulp.src($.config.path.lintTemplates)
      .pipe($.pugLinter())
      .pipe($.pugLinter.reporter(lintReporter))
  });
};
