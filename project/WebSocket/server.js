const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server started on ws://localhost:8080');

// Handling client connection
wss.on('connection', (socket) => {
    console.log('New Client connected');

    // Send message to client
    socket.send('Welcome! you are connected to server');

    // Receive message from client
    socket.on('message', (message) => {
        console.log('Received from client:', message.toString());

        // Echo back to client
        socket.send('Server Echo: ' + message);
    });

    // Detect client disconnect
    socket.on('close', () => {
        console.log('Client Disconnected');
    });
});