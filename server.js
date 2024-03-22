const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // URL: http://localhost:3000/
    res.send("Welcome to my Leo's backend application");
});

app.get('/leonardo', (req, res) => {
    // URL: http://localhost:3000/leonardo
    res.send("Hello Leonardo Mosiah Janes de Souza");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});