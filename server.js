'use strict';

const express = require('express');
const app = express();

app.get('/first-task', (req, res) => {
    res.send({serverMessage: "Hello, World from SERVER"});
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Hello, World!');
    console.log(`Server is up and running on port: ${PORT}`);
});