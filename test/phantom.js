var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.injectJs('testSuites.js');

page.open('http://quiet-castle-1767.herokuapp.com/test/index.html', function() {
  var firstChild = page.evaluate(function() {
    return document.body.firstChild;
  });

  console.log(firstChild);

  phantom.exit();
});
