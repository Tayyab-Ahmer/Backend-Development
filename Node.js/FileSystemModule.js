// Read Files

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('filesystem.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

// ---------------------------------------------


// Create Files

// Append File
var fs = require('fs');
fs.appendFile('fil.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


// Open File
var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log(file);
    console.log('Saved!');
});


// Write File
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// ---------------------------------------------------


// Update Files

// Append File        
var fs = require('fs');
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// Write File
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});


// --------------------------------------------

// Delete Files
var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});


// ----------------------------------------------

// Rename Files

var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});


// -----------------------------------------------

