var httpFunctions = require('../httpModule/http-functions');

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

httpFunctions.getHTML(requestOptions, printUpperCase);