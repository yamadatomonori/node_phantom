var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};


page.open('http://localhost/test/index.html');

phantom.exit();
