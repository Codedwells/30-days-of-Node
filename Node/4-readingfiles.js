//importing the required inbuilt module
// SYNCHRONOUS FILE READ AND WRITE

const { readFileSync, writeFileSync } = require("fs");

//writefile takes in 3 parameters --the output file will be appended the text given
//this is dependent on the flag
writeFileSync(
  "path/hello/written.txt",
  "Hello this text has been written by  node js during practice.\n",
  { flag: "a" }
);

//reading the files change specified path
const files = readFileSync("path/hello/world.txt", "utf8");
const writtenfile = readFileSync("path/hello/written.txt", "utf8");
//console.log(writtenfile);
//console.log(files);

// ASYNCHRONOUS READ AND WRITE

const { readFile, writeFile } = require("fs");

//readFile takes 3 params path,encoding,callback
//the callback takes in 2 params error and results being read

readFile("path/hello/world.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);

  readFile("path/hello/world.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(result);
  });

  //a callback is included
  writeFile(
    "path/hello/written.txt",
    "Hello this text has been written by  node js during practice.ASYNC",
    { flag: "a" },
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(result);
    }
  );
});
