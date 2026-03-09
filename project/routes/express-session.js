const express = require ('express');
const session = require('express-session');

const app = express();
app.use(session({secret: 'my_secret_key',resave:false, saveUninitialized:true, cookie:{maxAge:1000}}));

app.get('/', (req,res)=> {
    if(!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views++;
    }
    res.send(`Number of views: ${req.session.views}`);
});

app.listen(3000, ()=> {
    console.log("Server is running at 3000");
});