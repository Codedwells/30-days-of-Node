// There are several methods we can access
// GET POST PUT DELETE
const express = require("express");
const app = express();
const people = require("./express/people");

//GET
app.get("/", (req, res) => {
	res.status(200).json({status:"success",data:people});
});

app.listen(5000, (req, res) => {
	console.log("The server is running....");
});
