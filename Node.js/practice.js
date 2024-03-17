const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {

    if (req.url.startsWith('/user') && req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true);
        const userId = parsedUrl.query.id;

        try {
            const userData = JSON.parse(fs.readFileSync('./User.json'));
            const user = userData.users.find(user => user.id == userId);

            if (user) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(user));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User not found' }));
            }
        } catch (err) {
            console.error('Error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal server error' }));
        }
    }

    // -------------------------------------------

    if (req.url.startsWith('/all') && req.method === 'GET') {
        const userData = JSON.parse(fs.readFileSync('./User.json'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(userData.users));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Users not found' }));
    }

    // ----------------------------------------

    if (req.url.startsWith('/create') && req.method === 'POST') {

        let userData = JSON.parse(fs.readFileSync('./User.json'));

        let newUser = {
            id: userData.users.length + 1,
            name: 'raza',
            dob: '2000-02-02',
            cnic_number: '12345-1234567-8',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        userData.users.push(newUser);

        fs.writeFileSync('./User.json', JSON.stringify(userData));
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not Added' }));
    }

    // -----------------------------------------

    if (req.url.startsWith('/update') && req.method === 'PUT') {

        let parsedUrl = url.parse(req.url, true);
        let userId = parsedUrl.query.id;
        let userData = JSON.parse(fs.readFileSync('./User.json'));

        let userIndex = userData.users.findIndex(user => user.id == userId);
        if (userIndex != -1) {

            let originalUser = userData.users[userIndex];

            let updatedUser = {
                id: originalUser.id,
                name: 'updata name',
                dob: 'update dob',
                cnic_number: 'update 12345',
                created_at: originalUser.created_at,
                updated_at: new Date().toISOString()
            };
            userData.users[userIndex] = updatedUser;

            fs.writeFileSync('./User.json', JSON.stringify(userData));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedUser));
        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error' }));
    }

    // --------------------------------------------

    if (req.url.startsWith('/delete') && req.method === 'DELETE') {

        let parsedUrl = url.parse(req.url, true);
        let userId = parsedUrl.query.id;

        let userData = JSON.parse(fs.readFileSync('./User.json'));
        const userIndex = userData.users.findIndex(user => user.id == userId);

        if (userIndex != -1) {

            userData.users.splice(userIndex, 1);

            fs.writeFileSync('./User.json', JSON.stringify(userData));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User deleted successfully' }));

        }
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error' }));
    }


}).listen(7070);





