const http = require('http');
const server = http.createServer((req, res)=> {

    //sending response header

    res.writeHead(200, {'content-type': 'text/plan'});

    //sending response body

    res.end("hello this is a server");
});

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
});


//req.url
//req.method
//req.headers
