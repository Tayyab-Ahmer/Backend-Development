const { exec, ChildProcess } = require('child_process');
const { spawn } = require('child_process');
const { fork } = require('child_process');
const path = require('path');

// Exec Method

url = "https://www.youtube.com/";
cmdCommand = `start chrome /new-tab ${url}`;
exec(cmdCommand);


// ---------------------------------------------

// Exec Method

exec('ping google.com', (error, stdout, stderr) => {

    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout:\n${stdout}`);
});

// -----------------------------------------------

// Spawn Method

const subProcess = spawn('cmd', ['/c', 'dir', '/s', '/b', 'PathModule.ts']);

subProcess.stdout.on('data', (data) => {
    console.log(`stdout:\n${data}`);
});
subProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});
subProcess.on('error', (error) => {
    console.error(`error: ${error.message}`);
});
subProcess.on('close', (code) => {
    console.log(`child process salida ${code}`);
});

// --------------------------------------------------------

// Fork Method 

const subProcess2 = fork(path.join(__dirname, 'childFork.js'));
subProcess2.on('message', (message) => {
    console.log(`I get this from the son : ${message}`);
});

/* 
if (process.argv[2] === 'child') {
    // This code will run in the child process
    setTimeout(() => {
        process.send("Hello father, I send this information");
    }, 5000);
} else {
    // This code will run in the parent process
    const subProcess = fork(process.argv[1], ['child']);
    subProcess.on('message', (message) => {
        console.log(`I get this from the son : ${message}`);
    });
} */