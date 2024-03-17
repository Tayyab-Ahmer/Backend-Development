var http = require('http');
var data = '{ "name": "Tayyab", "age": 20, "education": "BS-CS" }';

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application / json'
    });
    res.write("JSON Type Data");
    res.write(data);
    res.end();
}).listen(4000)

// ----------------------


var http = require('http');
var data = "Text Type Data";

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text / html'
    });
    res.write("Testing HTTP Module");
    res.write(data);
    res.end();
}).listen(4000);

// -----------------------------------------

const http = require('http');

let options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
};

http.request(options, (response) => {

    console.log(`STATUS: ${response.statusCode}`);

}).end();