// There are three types of middleware
// our own , express , third party
const express = require("express");
const app = express();

// More than one middleware can be imported
const authorize = require("./express/middleware2");
const logger = require("./express/middleware1");

// Using more than one middleware
//The use(middleware) always comes before the other routes
app.use([logger, authorize]);

//When you add a route as shown below any route after the
//indicated route will use the middleware
app.use('/about',logger)

app.get('/about/me',(req,res)=>{
	res.send("About me section...")
})

app.get("/", (req, res) => {
	res.send("You are authorized...");
});

// To use  more than one middle ware  follo as bellow
app.get("/about", [logger, authorize], (req, res) => {
	res.send("You are authorized...2");
});

// Express inbuilt middleware example recap
//    app.use(express.static("../nav bar"));

app.listen(5000, (req, res) => {
	console.log("The server is running....");
});
