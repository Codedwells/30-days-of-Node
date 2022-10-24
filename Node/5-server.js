//Lets create a mock server
//You can also return pure html with the response

const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/home") {
		res.end(`<p>Hello node server is spinning....</p>
	<a href="/index.html">Index</a> <a href="/home">About</a>`);
	}
	if (req.url === "/about") {
		res.end(`<p>This is our small about.</p> <a href="/home">Home</a>
	<a href="/index.html">Index</a>`);
	}
	if (req.url === "/index.html") {
		res.end(
			`<h1>This is the index page of this server</h1>
	  <a href="/home">Home</a>
	  <a href="/about">About</a>`
		);
	}
	//   res.end(`<h1>404 Error</h1> <a href="/home">Home</a>`);
});

server.listen(5000);
