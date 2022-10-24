//The syntax to import express is very straight forward

const express = require("express");
const http = require("http");

//Here we use write head instead of res.end() to
//send our response to the request made
//we also specify the status code and content type

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/html" });
	res.write("<h2>hello there this is a new server...</h3>");
	res.end();
});

server.listen(5000);
