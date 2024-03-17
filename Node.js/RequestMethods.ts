import * as  url from 'node:url';
import * as http from 'node:http';
import { parse } from 'node:querystring';
import * as https from 'node:https';

// GET Method

http.createServer((req, res) => {

    if (req.method === 'GET') {

        if (<string>req.url === '/products') {

            const products: { id: number, name: string }[] = [
                { id: 1, name: 'Product A' },
                { id: 2, name: 'Product B' },
                { id: 3, name: 'Product C' },
            ];

            res.writeHead(200, { 'Content-Type': 'application/json' });

            res.end(JSON.stringify(products));
        }
    }
}).listen(3000);


// ---------------------------------------------------------

// POST Method

http.createServer((req, res) => {

    if (req.method === 'POST') {

        if (<string>req.url === '/feedback') {

            let body: string = '';

            req.on('data', (chunk) => {

                body += chunk.toString();

            });

            req.on('end', () => {

                const feedbackData = parse(body);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("Feedback Summitted Successfully");
            });
        }
    }
}).listen(4000);


// -------------------------------------------------------------

// DELETE Method

const options = {
    method: 'DELETE',
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
};

const req = https.request(options, (res) => {

    console.log('Status code:', res.statusCode);
    console.log('Headers:', res.headers);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Data:', data);
    });
});

req.on('error', (err) => {
    console.error('Error:', err.message);
});

req.end();

// ------------------------------------------------------------------

//  PUT Method 

const data = JSON.stringify({
    name: 'Hardik Savani',
    job: 'Blog Writer'
});

const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request('https://reqres.in/api/users/2', options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        console.log('Body:', responseData);
    });
});

req.on('error', (err) => {
    console.error(err);
});

req.write(data);
req.end();


