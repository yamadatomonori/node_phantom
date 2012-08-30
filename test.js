var fs = require('fs');
console.log(
    fs.read(
        '/app/client/closure-library/closure/goog/editor/browserfeature_test.html'));

var page = require('webpage').create();

phantom.exit();
