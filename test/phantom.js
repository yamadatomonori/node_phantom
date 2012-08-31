var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

//page.injectJs('testSuites.js');

page.open('http://quiet-castle-1767.herokuapp.com/test/index.html', function() {
  var firstChildInnerHTML = page.evaluate(function() {
    return document.body.firstChild.innerHTML;
  });

  console.log(firstChildInnerHTML);

  phantom.exit();
});
