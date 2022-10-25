const express = require("express");
const app = express();
const people = require('./people')

app.listen(5000, (req, res) => {
    console.log(people)
	console.log("The server is running....");
});