'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData =
      $.gulp.src($.config.path.spritePng)
        .pipe($.gp.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe($.gp.spritesmith({
          // retinaSrcFilter: '**/*@2x.png',
          // retinaImgName: 'sprite@2x.png',
          algorithm: 'binary-tree',
          imgName: 'sprite.png',
          cssName: 'sprite.scss',
          cssFormat: 'css',
          padding: 10,
          imgPath: './assets/images/sprite.png',
          cssVarMap: function (sprite) {
            sprite.name = 'icon-' + sprite.name;
          }
        }));

    spriteData.img.pipe($.gulp.dest($.config.path.build + '/assets/images'));
    spriteData.css.pipe($.gulp.dest($.config.path.spritePngStyles));
    return spriteData;
    });
};
