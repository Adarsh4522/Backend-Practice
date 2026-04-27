const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.post('/data', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello, ${name}!` });
}   );

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
