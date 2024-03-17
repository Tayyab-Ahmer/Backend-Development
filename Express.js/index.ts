// import express from 'express';
// const app = express();
// const port = 3000;

// ---------------------------------------------------

// Middleware Function
/* app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('WelCome!');
});

app.get('/home', (req, res) => {
    res.send('WelCome to Home Page !');
});
 */
// ----------------------------------------------------

// Routes

// GET method route
/*
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
}) */

// -----------------------------------------------

// Middleware and Routing

// Multiple routing

/* const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router1.get('/user', function (req, res, next) {
    res.send("User Router Working");
    next();
});

router2.get('/admin', function (req, res, next) {
    res.send("Admin Router Working");
    next();
});

router2.get('/student', function (req, res, next) {
    res.send("Student Router Working");
    res.end();
});

app.use(router1);
app.use(router2);
app.use(router3); */

// --------------------------------------------------

// app.listen(port, () => {
//     console.log(`Express app listening on port ${port}`);
// });
