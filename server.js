'use strict';

const express = require('express');
const app = express();

app.get('/first-task', (req, res) => {
    res.send({serverMessage: "Hello, World from SERVER"});
});

// make sure nothing is on port PORT, because will be fetching data via react through that port
let PORT = process.env.PORT || 3334;

app.listen(PORT, () =>{
    console.log('Hello, World!');
    console.log(`Server is up and running on port: ${PORT}`);
});