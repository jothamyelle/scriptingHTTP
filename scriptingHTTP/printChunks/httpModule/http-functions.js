var https = require('https');   

function getHTML(options, callback) {

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var HTML = "";

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      HTML += data + "\n";
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(HTML);
    });
  });

}

module.exports = {
  getHTML: getHTML
};