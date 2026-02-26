const http = require('http');
const server = http.createServer((req, res)=> {

    if(req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end("<h1>Welcome to home page</h1>")
    }

    else if(req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/htm;');
        res.end('Welcome to about page')
    }
    
    else if(req.url === '/data' && req.method === 'GET') {
        res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
        const data = {
            name: 'John Doe',
            age: 30,
            email: 'john.doe@example.com'
        };
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404);
        res.end('<h1 style="color: red">404 Not Found</h1> <p>The page you are looking for does not exist.</p>')
    }

});

server.listen(3000, () => {
    console.log("The server is running at port 3000");
})
    
// In JavaScript (primarily using Node.js), monolithic architecture involves building the entire application as a single,
//  unified codebase, while microservices architecture breaks it into a collection of small, independent, and loosely coupled
//   services. The choice between them involves a set of trade-offs based on project size, team structure, and scalability need

// //Express.js (or simply Express) is a fast, minimalist, and flexible backend web application framework for Node.js.
//  It is designed to simplify and streamline the process of building server-side applications and APIs using JavaScript.

// Primary Uses of Express.js

// Building RESTful APIs: Express provides a robust and clean way to define routes and handle different HTTP methods
//  (GET, POST, PUT, DELETE) which is ideal for creating APIs used by front-end frameworks (like React or Angular)
//  and mobile applications

//They are the function that runs between request and response.
// Middleware is software that acts as a bridge or "glue" between different applications, databases, and operating systems,
//  facilitating communication and data management across heterogeneous systems. It enables, for example,
//   a web server to communicate with a database or legacy systems to connect with modern cloud platforms