var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open('http://quiet-castle-1767.herokuapp.com/test/index.html');

console.log(111);

phantom.exit();
