//Stream are used to read and write files they come in four types Writable Readable Duplex Transform
//They are essential when huge data streams are to be handled
// The data is ussually read in chunks of 64kb by default
//You can alter the buffer size by adding the highWaterMark

const {createReadStream} =require('fs')

const stream = createReadStream(
    './path/big-file.txt',
    {highWaterMark: 90000/*,encoding:'utf-8'*/}
    )

stream.on('data',(result)=>{
    console.log(result)
})

//This line catches the error
stream.on('error',(e)=>{
    console.log(e)
})