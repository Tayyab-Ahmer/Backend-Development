// Process Methods

// Abort Method

const abortfunction = () => {
    console.log('Start...');

    setInterval((function () {
        return console.log('Hello World');
    }), 1000);


    setTimeout((function () {
        return process.abort();
    }), 5000);
};

// abortfunction();

// ------------------------------------------

// chdir Method & cwd Method

console.log(`Starting directory: ${process.cwd()}`);
try {
    process.chdir('NewNodeApp');
    console.log(`New directory: ${process.cwd()}`);
} catch (err) {
    console.error(`chdir: ${err}`);
}

// -------------------------------------------------

// Exit Method

// console.log('Code running');
// process.on('exit', function (code) {
//     return console.log(`exiting with the error code : ${code}`);
// });
// setTimeout((function () {
//     return process.exit(0);
// }), 5000);

// -------------------------------------------

// Kill Method
/* 
const pid = process.pid;
console.log(`Process ID: ${pid}`);
process.on('SIGHUP', () => console.log('Received: SIGHUP'));
process.on('SIGINT', () => console.log('Received: SIGINT'));
setTimeout(() => { }, 100000);
setTimeout((function () {
    return process.kill(pid, 'SIGINT');
}), 5000); */


// -----------------------------------------------

// Memory Usage Method
console.log(process.memoryUsage());

// -----------------------------------------------

// Next Trick Method

console.log('start');
process.nextTick(() => {
    console.log('nextTick callback executed in next iteration');
});
console.log('scheduled');