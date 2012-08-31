


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

    var app = express();

    app.configure(function() {
      app.use(express.logger());
      app.use(express.static('/app/test'));
    });

    app.listen(process.env.PORT || 3000, function() {
      console.log('Listening');
    });

    this.app = app;

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
    this.exec('cake phantom', function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  }
};


new Web;




