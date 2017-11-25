'use strict';

// import './helpers/sw-precache';
import { svgSprite } from './helpers/svg-sprite';

//inline svg-sprite + localStorage
svgSprite(window, document);

//svg4everybody
svg4everybody();

// Modules
let cache = {};

function importAll(r) {
  r.keys().forEach(function (key) {
    cache[key] = r(key);
  });
}

importAll(require.context('../blocks/', true, /^[^\_]*\.js$/));
