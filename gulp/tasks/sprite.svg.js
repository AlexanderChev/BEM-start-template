'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src($.config.path.spriteSvg)
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: false
        }
      }))
      .pipe($.gp.cheerio({
        run: function($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg'
          }
        }
      }))
      .pipe($.gp.cheerio(function($) {
        $('svg').attr('style', 'display:none');
      }))
      .pipe($.gulp.dest($.config.path.build + '/assets/images'));
  });
};
