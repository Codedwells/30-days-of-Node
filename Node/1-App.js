//-----------------------------WELCOME TO LEARN NODE IN THIRTY DAYS------------------------------
//This is a curriculum based on an eight hour Node.js course which also includes express.js
//Through the thirty days we will be learning NodeJs I personally made this while learning
//Follow the numbering before each file name to get synced progress
//------------------------------LETS LEARN NODE JS-----------------------------------------------

//This syntax is used in importing modules you have created and exported
//Self created modules are javascript files you have created
//There are other third party modules and inbuilt modules like 'os'

const names = require("./2-module-1");
const os = require("os");
const inbuilt = require("./2-module-2");

//Incase you see syntax like below it is still okay
//to import modules without assigning them to variables.

require("./4-readingfiles");
inbuilt;
console.log(os.type());
console.log(names);
