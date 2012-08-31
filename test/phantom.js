function assertEqual(arg1, arg2, message) {
  if (arg1 == arg2) {
    console.log(message);
  }
}


var page = require('webpage').create();


/**
 * @param {string} msg .
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};


page.open('http://quiet-castle-1767.herokuapp.com/test/index.html', function() {
  var firstChildInnerHTML = page.evaluate(function() {
    return document.body.firstChild.innerHTML;
  });

  assertEqual(
      firstChildInnerHTML,
      'goog.editor Demo',
      'document.body.firstChild is rendered!!');

  phantom.exit();
});
