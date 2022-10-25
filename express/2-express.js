const express = require("express");
const app = express();

//Here I try to send responses after reading files with fs
//The css and javascript don't seem to load

const { readFileSync } = require("fs");
const homePage = readFileSync("./nav bar/index.html", "utf-8");
const cssStyle = readFileSync("./nav bar/styles.css", "utf-8");
const logic = readFileSync("./nav bar/script.js", "utf-8");

//express has some inbuilt methods which include
// express.get
// express.post
// express.put
// express.all
// express.delete
// express.use  ---used when a small application is made
// express.listen

app.get("/", (req, res) => {
	res.send(homePage);
});

//This code sets a 404 status code for all responses that
//can not be processed

app.all("*", (req, res) => {
	res.status("404").send("Your page not found 404 Error");
});

//This listen is similar to the listen os http.listen()
//what extends is the callback

app.listen(5000, () => {
	console.log("the server is alive....");
});
