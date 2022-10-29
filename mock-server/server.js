const express = require("express");
const app = express();
const { readFileSync } = require("fs");
const jdata =readFileSync("./mock-server/response.json",'utf-8')

const PORT = 8000;

app.get("/", (req, res) => {
	res.send(jdata);
});

app.listen(PORT, (req, res) => {
	console.log(`Server running on port ${PORT}`);
});