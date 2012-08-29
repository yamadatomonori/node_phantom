


/**
 * @constructor
 */
function Web() {
  this.init.call(this);
}


Web.prototype = {

  /**
   * @type {object} .
   */
  exec: require('child_process').exec,


  /**
   * @this {Web}
   */
  init: function() {
    var express = require('express');

    this.app = express.createServer(express.logger());

    this.app.listen(process.env.PORT || 3000, function() {
      console.log('Listening');
    });

    this.compile();
  },


  /**
   * @this {Web}
   */
  compile: function() {
    var self = this;

    this.exec('cake builder', function(error, stdout, stderr) {
      self.builderCallback.call(self, error, stdout, stderr);
    });
  },


  /**
   * @param {string} error .
   * @param {string} stdout .
   * @param {string} stderr .
   * @this {Web}
   */
  builderCallback: function(error, stdout, stderr) {
    var self = this;

    this.exec('cat client/js/compiled.js', function(error, stdout, stderr) {
      self.mapPath.call(self, '/compiled.js', 'js', error, stdout, stderr);
    });

    this.exec('cat client/css/compiled.css', function(error, stdout, stderr) {
      self.mapPath.call(self, '/compiled.css', 'css', error, stdout, stderr);
    });

    this.runTest();
  },


  /**
   * @param {string} path .
   * @param {string} type .
   * @param {string} error .
   * @param {string} stdout .
   * @param {string} stderr .
   * @this {Web}
   */
  mapPath: function(path, type, error, stdout, stderr) {
    this.app.get(path, function(request, response) {
      if (error) {
        response.send(stderr);
      } else {
        response.contentType(type);
        response.send(stdout);
      }
    });
  },


  /**
   * @this {Web}
   */
  runTest: function() {
    var self = this;

    self.exec(
        'ln -s /app/phantomjs/bin/phantomjs ./bin/phantomjs', function(
            error, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);

          self.exec(
              'chmod a+x ./phantomjs/bin/phantomjs', function(
                error, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);

                self.exec('ls -la ./bin', function(error, stdout, stderr) {
                  console.log(stdout);
                  console.log(stderr);

                  console.log(repuire('phantom'));
                });
              });
        });
  }
};


new Web;




