import * as path from 'node:path';

const dir1 = path.join('home', 'work', 'project');
console.log(dir1);

// const dir2 = path.resolve('home', 'work', 'my-project');
// console.log(dir2);

const fileExtension = path.extname('/foo/bar/node.js');
console.log(fileExtension);

const pathProps = path.parse('/foo/bar/node.js');
console.log(pathProps);

const filename = path.basename('/Users/scaler/demo_path.js');
console.log(filename);

const filepath = 'C:/Users/path-module/images/scaler/william-smith.png';
const directoryName = path.dirname(filepath);
console.log('Directory structure is: ', directoryName);

const path1 = path.isAbsolute("/user/scaler/");
console.log(path1);

const path6 = path.isAbsolute("user/scaler/detail.txt");
console.log(path6);

const path4 = path.normalize("/abcd/scaler/.");
console.log(path4)

const path5 = path.normalize("/abcd/scaler/..");
console.log(path5)

const path3 = path.normalize("/abcd/scaler/../topics")
console.log(path3);


let originalPath = "C:\\Windows\\abcd";
console.log("Original Path is:", originalPath);

let nameSpacedPath = path.toNamespacedPath(originalPath);
console.log("Namespaced Path is:", nameSpacedPath);


/* 
// Importing the path module in node js
const path = require('path');

// CASE 1:
// If "root", "dir" and "base" are all given, then "root" is ignored.
const path1 = path.format({
    root: "/ignored/root/",
    dir: "/home/user/scaler",
    base: "topics.txt",
});
console.log("Path 1:", path1);

// CASE 2:
// If "dir" is not specified then "root" will be used
// If only "root" is provided
// platform separator will not be included.
// "ext" will be ignored.
const path2 = path.format({
    root: "/",
    base: "lostcause.dat",
    ext: ".noextension",
});
console.log("Path 2:", path2);

// CASE 3:
// If "base" is not specified
// "name" and "ext" will be used
const path3 = path.format({
    root: "/movies/",
    name: "Rush",
    ext: ".mp3",
});
console.log("Path 3:", path3);
 */


