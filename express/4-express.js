//With this syntax you are able to perform basic routing
// The req.params is able to fetch the params passed in 
// the query string. Where there is a :productID is a placeholder
// it facilitates distructuring of the params passed in the url
//ROUTE PARAMETERS

const express = require("express");
const app = express();

app.get("/api/products/:productID/reviews/:reviewsID", (req, res) => {
	const {productID, reviewsID} = req.params
	console.log(req.params)

    //res.json sends a json file as the response to the request
    //This are the basics of routing 

	res.json([{ name: "jayson", price: "priceless" }]);
});

app.listen(5000, (req, res) => {
	console.log("The server is listening now....");
});
