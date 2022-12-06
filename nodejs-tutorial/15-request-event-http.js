const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.end('Welcome')
// })

// using event emitter API

const server=http.createServer()
// emit request event
// subscibe to it /listen for it /respond to it

server.on('request',(req,res)=>{
    res.end('hello')
})

server.listen(4500)