'use strict';

module.exports = {
  path: {
    templates: ['src/pages/*.pug'],
    blocksData: ['src/blocks/*/data/**/*.json', '!src/blocks/*/data/**/_*.json'],
    styles: 'src/styles/*.scss',
    scripts:'src/scripts/*.js',
    lintStyles: ['src/**/*.scss', '!src/styles/lib/**/*.*'],
    lintScripts: ['src/scripts/**/*.js', 'src/blocks/**/*.js', '!src/scripts/lib/**/*.*'],
    lintTemplates: ['src/pages/**/*.pug', 'src/blocks/**/*.pug'],
    public: 'src/public/**/{*,.*}',
    spritePng: ['src/images/icons/**/*.png', 'src/blocks/*/images/icons/**/*.png'],
    spritePngStyles: 'src/styles/global',
    spriteSvg: ['src/images/icons/**/*.svg', 'src/blocks/*/images/icons/**/*.svg'],
    build: 'build',
    imagesBlock: 'src/blocks/*/images/**/*.{jpg,jpeg,gif,png,svg}',
    fonts: [
      'src/fonts/**/*.{ttf,woff,woff2,eot,svg}'
    ],
    images: [
      'src/images/**/*.*',
      '!src/images/icons/*.*',
    ],
    vendorStyles: [
      './node_modules/normalize.css/normalize.css'
    ],
    vendorScripts: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/svg4everybody/dist/svg4everybody.min.js'
    ]
  },
  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};
