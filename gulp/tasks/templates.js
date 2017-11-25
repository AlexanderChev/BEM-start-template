'use strict';

module.exports = function() {
  $.gulp.task('templates', function () {
    return new Promise(function (resolve, reject) {
      $.emitty.scan(global.emittyChangedFile).then(function () {
        $.gulp.src($.config.path.templates)
          .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(function (error) {
              return {
                title: 'Pug',
                message: error.message
              }
            })
          }))
          .pipe($.gp.if(global.watch, $.emitty.filter(global.emittyChangedFile)))
          .pipe($.gp.pug({
            locals: JSON.parse($.fs.readFileSync('tmp/data.json', 'utf8')),
            pretty: true
          }))
          .pipe($.gulp.dest($.config.path.build))
          .on('end', resolve)
          .on('error', reject);
      });
    });
  });
};
