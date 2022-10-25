// In module 5 we saw how we can create a  middleware
// when we have a large app we need to keep the  middleware
// in a separate file and import it when necceasary

const express = require("express");
const app = express();
const logger = require("./express/middleware1");

//
// To avoid redundancy in typing logger in every route as seen in
// module 5  we use :) 'use'
// this is the middleware call
app.use(logger);
// if we pass in the first argument all routes begining
// with that route take that middleware i.e
// app.use('/dashboard/list',logger)
//

// We no longer need the logger in every route
app.get(
	"/",
	/*logger,*/ (req, res) => {
		res.send("hello there im spinning up...");
	}
);

app.get("/about", (req, res) => {
	res.send("spinning about");
});

app.listen(5000, (req, res) => {
	console.log("the sucker is spinning....");
});
