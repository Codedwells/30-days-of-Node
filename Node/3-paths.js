const path = require("path");

//This include some of the ways you can access file paths using node js
const absolute = path.resolve(__dirname, "path", "hello", "world.txt");
const filePath = path.join("path", "hello", "world.txt");
const baseName = path.basename(filePath);

//Both of this logs show file paths
// __dirname gives a absolute path
console.log(absolute);
console.log(filePath);
console.log(baseName);
