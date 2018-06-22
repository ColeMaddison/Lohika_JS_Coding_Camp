'use strict';

const UserModel = require('../Schemas/UserSchema');
const generator = require('generate-password');
const path = require('path');
const bcrypt = require('bcrypt');

// manage sign up form data
exports.signup = (req, res) => {

    let userData = req.body;

    let checkEmail = userData.email;

    UserModel.find({email: checkEmail}, (err, data) => {
        // console.log(userData);
        if(data.length){
            res.end(JSON.stringify({message: "User already exists!", statusCode: 409}));
        } else {
            let userPass = generator.generate({
                length: 11,
                numbers: true
            });

            bcrypt.genSalt(10, (err, salt) => {
                if(err){
                    console.error(err);
                    res.end(JSON.stringify({message: "Unknown error occured"}));
                } 
                bcrypt.hash(userPass, salt).then(hash => {
                    let user = new UserModel({
                        name: userData.name,
                        password: hash,
                        surname: userData.surname,
                        midName: userData.midname,
                        email: userData.email,
                        gender: userData.gender,
                        age: parseInt(userData.age),
                        photoLink: path.join(__dirname, req.file.path) 
                    });
                
                    user.save(err => {
                        console.error(err)
                    });
                    res.send(JSON.stringify({message:'Success!', userPass, statusCode: 200}));
                });
            });
        }
    })
}

// just get data from db to check
exports.getDbData = (req, res) => {
    UserModel.find(function (err, data) {
        if (err) return console.error(err);
        res.status(200).json(data);
    })
}

// only for dev purpose
exports._dropDb = (req,res) => {
    UserModel.find().remove().exec();
    res.status(200).json({message: "Data has been remnoved"});
}