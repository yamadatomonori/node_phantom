var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.content = require('fs').read(
    '/app/client/closure-library/closure/goog/editor/browserfeature_test_console.html');

phantom.exit();
