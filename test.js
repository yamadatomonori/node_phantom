var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.libraryPath = '/app/client/closure-library/closure/goog/';
page.injectJs = 'base.js';

page.content = require('fs').read('browserfeature_test.html');

phantom.exit();
