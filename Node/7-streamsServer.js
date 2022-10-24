const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./path/big-file.txt','utf-8');
    readStream.on('open',()=>{
        readStream.pipe(res)
    })
    readStream.on('error',(error)=>{
    res.end(error)
    })
}).listen(5000);