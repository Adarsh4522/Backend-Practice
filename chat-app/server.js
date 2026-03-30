const express = require('express');
const http = require('http');

const {Server} = require('socket.io');
const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname + '/public'));
app.get('/' , (req,res)=> {   //expicit route defining
res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket)=> {
    console.log('User connected', socket.io);

    socket.on('chatMessage', (msg)=> {
        console.log('Messages:',msg);

        io.emit('chatMessage', {
            user:socket.id,
            text:msg
        });
    });

    socket.on('disconnected',()=> {
        console.log('User disconnected: ', socket.id);
    });
});
server.listen(3000, ()=> {
    console.log('server is running');
});