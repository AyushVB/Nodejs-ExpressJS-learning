const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
    }
    else if(req.url==='/about'){
        // BLOCKING CODE .....!
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Page")
    }
    else{
        res.end('error page')
    }
})

server.listen(4500,()=>{
    console.log('server is listening on port 4500 port ..')
})

