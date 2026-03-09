const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('my_cookie_secret'));

app.get('/setcookie', (req,res)=> {
    res.cookie('theme', 'dark',{maxAge: 90000, httpOnly:true});
    res.cookie('sid','abc123', {signed:true,maxAge:30000,httpOnly:true});

    res.send('Cookies are set');
});

app.get('/read',(req,res)=> {
    console.log(req.cookies);
    console.log(req.signedCookies);

    res.json({cookies:req.cookies,signed:req.signedCookies});
});

app.listen(3000, ()=> {
    console.log("Server is running at 3000");
});