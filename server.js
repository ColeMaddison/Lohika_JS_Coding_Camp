'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const ctrl = require('./serverHandlers/controllers');
const mdl = require('./serverHandlers/middleware');
const bodyParser = require('body-parser');
const auth = require('./serverHandlers/authHandler');
const jwtDecode = require('jwt-decode');

const app = express();

let mongoose = require('mongoose');

// create db
mongoose.connect('mongodb://localhost/lhk');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'We have a db error:'));
db.on('open', () => {
    console.log('Connection established!');
});

// sighn up route with form fields validation
app.post('/signup', upload.single('file'), mdl.validateInputFields, (req, res) => {
    ctrl.signup(req,res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/login', (req, res) => {
    auth(req.body)
        .then(user => user ? res.status(200).json({message: "Login Successful", userToken: user.token}) : res.status(400).json({message: "Username or password incorrect!"}))
        .catch(err => console.error(err));
});

app.post('/checkToken', (req, res) => {
    console.log(req.body.token);
    if(req.body.token){
        let decoded = jwtDecode(req.body.token);
        res.json(decoded + '----');
    }
});

// get all db data
app.get('/db', (req, res) => {
    ctrl.getDbData(req, res);
});

app.get('/dbdrop', (req, res) =>{
    ctrl._dropDb(req,res);
});

app.get('/*', (req, res) => {
    res.status(404).end({message: "Page does not exist!"});
});

// make sure nothing is on port PORT, because will be fetching data via react through that port
let PORT = process.env.PORT || 3334;

app.listen(PORT, () =>{
    console.log(`Server is up and running on port: ${PORT}`);
});