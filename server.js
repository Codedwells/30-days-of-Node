//Url   query string routing
//When using conditionals always return otherwise you
// might get error with express

const express = require("express");
const app = express();

//This runs with this query string in browser
// http://localhost:5000/api/v1/query?name=john&location=nairobi&age=23

app.get("/api/v1/query", (req, res) => {
	//You can also destructure the query string received

	const { name, location, age } = req.query;
	console.log(req.query);
	res.status(200).send(`The users name is ${name} he lives in ${location}
	and is ${age} years old.`);
});

// return res.status(200).json({'success':true, "data":[]})
// when user inputs something request is successful but
//no data is available for those queries
//output is  { name: 'john', location: 'nairobi', age: '23' }

app.listen(5000, (req, res) => {
	console.log("the server is spinning up....");
});
