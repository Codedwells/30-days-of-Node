//The use of app use express static path resolve
//makes it easier to send responses to the client

const express = require("express");
const path = require("path");
const app = express();

//Here we are sending all files in the nav bar folder
//The convension is to name this folder public
// static and middleware

app.use(express.static(path.resolve(__dirname, "../nav bar")));

app.all("*", (req, res) => {
	res.status("404").send("Your page not found 404 Error");
});

app.listen(5000, (req, res) => {
	console.log("the server is listening....");
});
