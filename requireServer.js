//const http = require('http');
//const server = http.createServer((req,res)=> {
  //  console.log('URL:', req.url);

   // console.log('Method:',req.method);

   // console.log('Headers:',req.headers);

   // res.writeHead(200, {'content-type':'test/plain'});
   //// res.end('Check your console for all the request informations.');
//});

//server.listen(3000, ()=> {
   // console.log('Server is running');
//})

const http = require('http');
const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.write('<h1>Welcome</h1>');
    res.write('<p><i>This is a simple NodeJs http server</i></p>');
    res.end('<p><b> is good</b></p>');
});

server.listen(1200, ()=> {
    console.log('server is running');
});
