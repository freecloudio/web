'use strict';

if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}
require('whatwg-fetch');
Object.assign = require('object-assign');
// requestAnimationFrame is polyfilled in tests, since jsdom does not provide it.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
