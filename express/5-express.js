//Middleware sits between the request and the response

const express = require("express");
const app = express();

//Middleware has to be passed to the next middleware
//and if not it must be terminated res.end(.....) to avoid
// un necessary reload use next() no params
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const year = new Date().getFullYear();
	console.log(method, url, year);
	next();
};

app.get("/", logger, (req, res) => {
	res.send("hello there im spinning up...");
});
app.get("/about", logger, (req, res) => {
	res.send('about');
});

app.listen(5000, (req, res) => {
	console.log("the server is spinning up....");
});
