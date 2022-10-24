//This is a basic structure of a module
const os = require("os");

const sayHello = () => {
  console.log(`Your Os version is ${os.platform}`);
};
//This way you can export specific items while leaving
//other components of a specific module

//You can also destructure exports into an object
module.exports = sayHello()
