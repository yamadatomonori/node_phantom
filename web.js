


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
    var express = this.express = require('express');

    var app = this.app = express();

    app.configure(function() {
      app.use(express.logger());
      app.use(express.static(__dirname + '/client/compiled'));
    });

    app.listen(process.env.PORT || 3000, function() {
      console.log('Listening');
    });

    this.compile();
  },


  /**
   * @this {Web}
   */
  compile: function() {
    var self = this;

    this.exec('mkdir /app/client/compiled');

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
    this.app.use(this.express.static(__dirname + '/client/compiled'));

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




