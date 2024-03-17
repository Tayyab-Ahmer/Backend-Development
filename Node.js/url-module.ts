import * as  url from 'node:url';
import * as http from'node:http';
import * as  fs from 'node:fs';
// // Parse an URL string into its segments
let myURL = url.parse('http://localhost:4000/pathname?search=test#hash', true);


console.log(myURL);
let qdata = myURL.query;
console.log(qdata);

// -----------------------------------

// Constructing URLs with the URL Module

// Define the URL components

const urlObject = {
    protocol: 'http',
    hostname: 'localhost',
    port: 4000,
    pathname: '/pathname',
    query: { search: 'test' },
    hash: '#hash'
};

// Construct the URL
 let myURL2 = url.format(urlObject);
console.log(myURL2);

// ------------------------------------------



http.createServer(function (req, res) {
    var q = url.parse(<string>req?.url, true);
    var fileName = q?.pathname?.slice(1);
    console.log('Request for file: ' + fileName);
    fs.readFile(<string>fileName, function (err, data) {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
