import * as os from 'node:os';

console.log("Architecture: " + os.arch());

console.log("Constants: " + os.constants);

// const cpus = os.cpus();
// console.log(cpus);

const endianness = os.endianness();
console.log(`Endianness: ${endianness}`);

const EOL = os.EOL;
console.log(`End of Line Marker: ${EOL}`);

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory} bytes`);

const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

const loadAvg = os.loadavg();
console.log(`Load Average: ${loadAvg}`);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

console.log("Platform: " + os.platform());

const release = os.release();
console.log(`Release: ${release}`);

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory} bytes`);

const osType = os.type();
console.log(`Operating System Type: ${osType}`);

const uptime = os.uptime();
console.log(`Uptime: ${uptime} seconds`);

const userInfo = os.userInfo();
console.log(userInfo);

