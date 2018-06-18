'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const UserModel = require('./Schemas/UserSchema');
let generator = require('generate-password');
let path = require('path');

const app = express();

let mongoose = require('mongoose');

// create db
mongoose.connect('mongodb://localhost/lhk');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'We have a db error:'));
db.on('open', () => {
    console.log('Connection established!');
});

// do not need body parser now - have multer adding explicit content type, maybe will need for later links

app.get('/first-task', (req, res) => {
    res.send({serverMessage: "Please proceed to registration"});
});

// test route can be done via sever and via client ports - COOL (might be a vulnerability?)
app.post('/signup', upload.single('file'), (req, res) => {
    let userPass = generator.generate({
        length: 11,
        numbers: true
    });

    let userData = req.body;

    let user = new UserModel({
        userName: userData.name,
        userPassword: userPass,
        useSurname: userData.surname,
        useMidName: userData.midname,
        userEmail: userData.email,
        userGender: userData.generate,
        userAge: parseInt(userData.age),
        userPhotoLink: path.join(__dirname, req.file.path) 
    });

    user.save(err => {
        console.error(err)
    });

    // console.log(userPass);
    console.log(req.file);
    console.log(req.body);
    res.send(JSON.stringify({message:'Success!', userPass}));
});

app.get('/db', (req, res) => {
    UserModel.find(function (err, data) {
        if (err) return console.error(err);
        res.json(data);
    })
});

// make sure nothing is on port PORT, because will be fetching data via react through that port
let PORT = process.env.PORT || 3334;

app.listen(PORT, () =>{
    console.log(`Server is up and running on port: ${PORT}`);
});