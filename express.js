const express = require('express');
const app = express();

app.get("/", (req,res)=> {
res.send("Welcome to home page!");
});

app.get("/about", (req,res) => {
    res.send("Welcome to about page");
})

app.listen(3000, ()=> {
    console.log('server is running');
})


//Types of middlewares

//1. Application level middleware. eg.: aap.method , app.use, etc.
//2. Router level middleware. eg.: express.router - it provides modular routing
//3. Built-in middleware. eg.: express.json() - to parse json data, express.urlencoded()- use to pass form data, 
//   express.static()
//4. Third-party middleware. eg.: morgan, cors- it connects frontend to backend, express.session()- it maintains the sessions,
//   bodyparser
//5> Error-handling middleware. eg.: app.use((err, res,req,next))

