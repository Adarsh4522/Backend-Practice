const express = require('express');
const app = express();
app.use((req,res,next)=> {
    console.log("Global:"+req.method + " "+ req.url);
    next();
});

app.all(/^\/admin/, (req,res,next)=> {
    console.log("This middleware is running for all admin route");
    next();
});
app.get('/', (req,res)=> {
    res.send('welcome to home page');
});

app.get('/contact',(req,res)=> {
    res.send('Email: support@example.com');
});

app.get('/admin', (req,res)=> {
    res.send('Admin Dashboard');
});

app.get('/admin/users', (req,res)=> {
    res.send('List of users');
});

app.listen(3000, ()=> {
    console.log('Server is running at 3000');
})