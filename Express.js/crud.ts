import express from 'express';
import fs from 'node:fs';
const app = express();
const port = 3000;
const filePath = './crud.json';
app.use(express.json());

// Get all users
app.get('/all', (req, res) => {

    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            res.send(err);
            return;
        }

        const users = JSON.parse(data);
        res.json(users);
    });
});

// Get user by ID
app.get('/user', (req, res) => {

    const userId = req.query.id;

    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            res.send(err);
            return;
        }

        const userData = JSON.parse(data);
        const user = userData.users.find(user => user.id == userId);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }
        else {
            res.json(user);
        }
    });
});

// Delete user by ID

app.delete('/delete', (req, res) => {

    const userId: number = req.query.id;

    fs.readFile(filePath, 'utf-8', (err, data) => {

        if (err) {
            res.send(err);
            return;
        }

        const userData = JSON.parse(data);
        const userIndex = userData.users.findIndex(user => user.id == userId);

        if (userIndex != -1) {

            userData.users.splice(userIndex, 1);
            fs.writeFileSync(filePath, JSON.stringify(userData));
            res.status(200).send('User deleted successfully');
            return;
        }
        else {
            res.status(404).send('User not found');
            return;
        }
    })

});

//  Create a User

interface User {
    id: number;
    name: string;
    dob: string;
    cnic: string;
}

app.post('/create', (req, res) => {

    let userData = JSON.parse(fs.readFileSync('./crud.json', 'utf8'));
    const { name, dob, cnic } = req.body;

    const newUser: User = {

        id: userData.users.length + 1,
        name,
        dob,
        cnic
    }

    userData.users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(userData));
    res.status(200).send("User added Successfully");

});

// Update User by ID 

app.put('/update', (req, res) => {

    const userId: number = req.query.id;
    let userData = JSON.parse(fs.readFileSync('./crud.json', 'utf8'));
    const { name, dob, cnic } = req.body;
    const userIndex: number = userData.users.findIndex(user => user.id == userId);

    if (userIndex != -1) {
        userData.users[userIndex].name = name;
        userData.users[userIndex].dob = dob;
        userData.users[userIndex].cnic = cnic;
        fs.writeFileSync(filePath, JSON.stringify(userData));
        res.status(200).send("User updated Successfully");
    }
    else {
        res.status(404).send("User not found");
    }

});


app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
