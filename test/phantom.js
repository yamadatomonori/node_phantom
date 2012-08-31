var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

try {
  page.open('http://quiet-castle-1767.herokuapp.com/test/index.html');
} catch (er) {
  console.log(er);
}

console.log(111);

//phantom.exit();
