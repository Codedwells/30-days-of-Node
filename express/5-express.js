const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('hello there im spinning up...')
})

app.listen(5000, (req, res)=>{
    console.log('the server is spinning up....')
})