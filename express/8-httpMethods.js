const express = require("express");
const app = express();
const people = require("./express/people");

app.use(express.static("./methods-public"));

//Parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

//The http -----------GET METHOD---------- is used to request for data

app.get("/api/data", (req, res) => {
	res.status(200).json({ status: "success", data: people });
});

app.get("/", (req, res) => {
	res.send("HOME");
});

//This setup is used with postman with ----------POST method--------------
// and url of localhost:5000/api/data
// In postman the body tab should be changed to raw and  type from "Text"
// to "JSON" we should type the request in our body and would be {"names":"Jayson"} then hit send
app.post("/api/data", (req, res) => {
	const { names } = req.body;
	res.status(200).send({ status: "success", data: [...people, names] });
});

//-----------------PUT method---------it is used to update the data
// In the url we can see that we have :id this will be a placeholder
// for the id passed in the url. In postman our url with PUT method
// would be localhost:5000/api/people/2 the body setting remain the
// same as in POST request

app.put("/api/people/:id", (req, res) => {
	const { names } = req.body;
	const { id } = req.params;
    console.log(people);

	for(let curr of people){
		var newPeople = people;
		if (curr.id == Number(id)) {
			newPeople[people.indexOf(curr)].name = names;
			res.status(200).send(newPeople);
		}
		return res.status(201).send(`${id} was not found`);
    }
	// console.log(names, id);
	// res.status(200).send(`We got ${names} and his id is ${id}`);
});

//----------------DELETE method--------------------

//Server listening
app.listen(5000, (req, res) => {
	console.log("The server is running....");
});
