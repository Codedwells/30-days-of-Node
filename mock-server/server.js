const express = require("express");
const app = express();

const PORT = 5000;

app.get('/',(req,res)=>{
	res.send('<h1>Server is running ....</h1>');
})


app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`);
})