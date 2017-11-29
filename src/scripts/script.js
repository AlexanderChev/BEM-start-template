'use strict';

//svg4everybody
svg4everybody();

// import './helpers/sw-precache';
import './helpers/svg-sprite';

// Modules
let cache = {};

function importAll(r) {
  r.keys().forEach(function (key) {
    cache[key] = r(key);
  });
}

importAll(require.context('../blocks/', true, /^[^\_]*\.js$/));
