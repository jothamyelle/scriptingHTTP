var httpFunctions = require('../httpModule/http-functions');

function printLowerCase(html) {
  console.log(html.split("").reverse().join(""));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

httpFunctions.getHTML(requestOptions, printLowerCase);