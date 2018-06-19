'use strict';

const UserModel = require('../Schemas/UserSchema');
const generator = require('generate-password');
const path = require('path');
const bcrypt = require('bcrypt');

// manage sign up form data
exports.signup = (req, res) => {

    let userData = req.body;

    let checkEmail = userData.email;

    UserModel.find({userEmail: checkEmail}, (err, data) => {
        if(data.length){
            res.end(JSON.stringify({message: "User already exists!"}));
        } else {
            let userPass = generator.generate({
                length: 11,
                numbers: true
            });

            // make it async to save hash in db, not plain text!!!!!!!!
            bcrypt.genSalt(10, (err, salt) => {
                if(err){
                    console.error(err);
                    res.end(JSON.stringify({message: "Unknown error occured"}));
                } 
                bcrypt.hash(userPass, salt).then(hash => {
                    userPass = hash;
                    let user = new UserModel({
                        userName: userData.name,
                        userPassword: userPass,
                        useSurname: userData.surname,
                        useMidName: userData.midname,
                        userEmail: userData.email,
                        userGender: userData.gender,
                        userAge: parseInt(userData.age),
                        userPhotoLink: path.join(__dirname, req.file.path) 
                    });
                
                    user.save(err => {
                        console.error(err)
                    });
                    res.send(JSON.stringify({message:'Success!', userPass}));
                });
            });
        }
    })
}

// just get data from db to check
exports.getDbData = (req, res) => {
    UserModel.find(function (err, data) {
        if (err) return console.error(err);
        res.json(data);
    })
}

// only for dev purpose
exports._dropDb = (req,res) => {
    UserModel.find().remove().exec();
    res.json({message: "Data as been remnoved"});
}