//Create a http server from scratch


const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('Hello there this server has been created from scratch')
})

server.listen(5000);