'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const bodyParser = require('body-parser');
const secretConfig = require('./serverHandlers/config.json');
const jwt = require('jsonwebtoken');

const auth = require('./serverHandlers/authHandler');
const ctrl = require('./serverHandlers/controllers');
const mdl = require('./serverHandlers/middleware');
const routes = require('./routes');

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
app.post(routes.signupRoute, upload.single('file'), mdl.validateInputData, (req, res) => {
    ctrl.signup(req,res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post(routes.loginRoute, (req, res) => {
    auth(req.body)
        .then(user => user ? res.status(200).json({message: "Login Successful", userToken: user.token}) : res.status(400).json({message: "Username or password incorrect!"}))
        .catch(err => console.error(err));
});

app.post('/account', (req, res) => {
    console.log('here');
    if(req.body){
        console.log(req.body);
        res.status(200).json({status: 'ok'});
    } else {
        res.status(400).json({status: 'not ok'});
    }
});

// route to check the token for validity
app.get(routes.checkTokenRoute, (req, res) => {
    if(req.headers){
        jwt.verify(req.headers.authorization.split(' ')[1], secretConfig.secret, function(err, decoded){
            let date = new Date().getTime();
            if(err || (decoded && date < decoded.exp)){
                return res.status(500).send({auth: false, message: "Failed to authenticate token!"});
            }
            res.status(200).send({auth: true, decoded, message: "Successful login"});
        });
    } else {
        res.status(401).send({auth: false, message: "No token provided"});
    }
});

app.get('/logout', (req, res) => {
    res.send({auth: false, message: "You have logged out"});
})

// get all db data
app.get(routes.dbData, (req, res) => {
    ctrl.getDbData(req, res);
});

app.get(routes.dropDb, (req, res) =>{
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