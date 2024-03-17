var url = require('url');

// // Parse an URL string into its segments
const myURL = url.parse('http://localhost:4000/pathname?search=test#hash', true);


console.log(myURL);
let qdata = myURL.query;
console.log(qdata);

// -----------------------------------

// Constructing URLs with the URL Module

// Define the URL components

var url = require('url');
const urlObject = {
    protocol: 'http',
    hostname: 'localhost',
    port: 4000,
    pathname: '/pathname',
    query: { search: 'test' },
    hash: '#hash'
};

// Construct the URL
const myURL2 = url.format(urlObject);
console.log(myURL2);

// ------------------------------------------


var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var fileName = q.pathname.slice(1);
    console.log('Request for file: ' + fileName);
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
