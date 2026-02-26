const bodyParser = require('body-parser');
//const bodyparser = require('body-parser');
const express = require('express');

const app = express();

const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/' , (req,res) => {
    res.send(`<form method = "POST" action= "/submit">
        <input type = "text" name="username" placeholder="ENter your name" required/>
        <button type = "submit">Submit</button>
</form>`);

});

app.post('/submit', (req, res) =>{
    const {username} = req.body;
    res.send(<h1>Welcome ${username}</h1>)
});

app.listen(3000, ()=>{
    console.log("server is running at 3000");
})