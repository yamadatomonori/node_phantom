var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};


page.open('http://quiet-castle-1767.herokuapp.com/test/index.html', function() {
  try {
    var firstChild = page.evaluate(function() {
      return document.body.firstChild:
    });

    console.log(firstChild);
  } catch (er) {
    console.log(er);
  }

  phantom.exit();
});

