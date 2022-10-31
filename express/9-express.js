// Express Router
// MVC == Model View Controller is a pattern and common convension
// Create a new folders named routes for all routes and controller for all controllers

const express = require("express");
const app = express();
const peopleRoute = require('./routes/people')
const login = require('./routes/auth')

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people',peopleRoute);
app.use('/login',login)


app.listen(5000, (req, res) => {
	console.log("The server is running....");
}); 

