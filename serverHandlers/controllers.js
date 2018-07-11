'use strict';

const mongoose = require('mongoose');
const UserModel = require('../Schemas/UserSchema');
const generator = require('generate-password');
const url = require('url');
const bcrypt = require('bcrypt');

// manage sign up form data
exports.signup = (req, res) => {

    let userData = req.body;

    let checkEmail = userData.email;

    UserModel.find({email: checkEmail}, (err, data) => {
        if(data.length){
            res.end(JSON.stringify({message: "User already exists!", statusCode: 409}));
        } else {
            let userPass = generator.generate({
                length: 11,
                numbers: true
            });

            bcrypt.genSalt(10, (err, salt) => {
                if(err){
                    res.end(JSON.stringify({message: err}));
                } 
                bcrypt.hash(userPass, salt).then(hash => {
                    const { filename } = req.file;
                    let user = new UserModel({
                        name: userData.name,
                        password: hash,
                        surname: userData.surname,
                        midName: userData.midname,
                        email: userData.email,
                        gender: userData.gender,
                        age: parseInt(userData.age),
                        photoLink: filename
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

exports.signout = (req, res) => {
    res.send({auth: false, message: "You have logged out"});
}

exports.userAccount = (req, res) => {
    if(req.decoded){
        const id = req.decoded.sub;
        UserModel.findById(id, (err, userData) => {
            if(err){
                return res.status(400).json({message: 'User not found'});
            } else {
                return res.status(200).json({userData, message: 'User found'});
            }
        })
    } else {
        res.status(400).json({status: 'not ok'});
    }
}

exports.pageNotFound = (req, res) => {
    res.status(404).end({message: "Page does not exist!"});
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

exports.modifyUserAccount = (req, res) => {
    if(!req.decoded){
        res.status(400).json({message: "Not authorized"});
    } else {
        const id = req.decoded.sub;
        const { name, surname, midname, email, gender, age } = req.body;

        if(req.file) {
            UserModel.findByIdAndUpdate(id, {name, surname, midName: midname, email, gender, age, photoLink: req.file.filename }, 
                (err, model) => {
                    if(err){
                        res.json({message: err});
                    } else {
                        res.json({message: "User successfully updated", model});
                    }
                });
        } else {
            UserModel.findByIdAndUpdate(id, { name, surname, midName: midname, email, gender, age }, 
                (err, model) => {
                    if(err){
                        res.json({message: err});
                    } else {
                        res.json({message: "User successfully updated", model});
                    }
            });
        }
    }
}

exports.searchUser = (req, res) => {
    const urlParts = url.parse(req.url);
    const queryParam = urlParts.query.split('=')[1];

    UserModel.find().or([
        {name: {"$regex": `^${queryParam}`, $options: 'i'}} , 
        {surname: {"$regex": `^${queryParam}`, $options: 'i'}}, 
        {midName: {"$regex": `^${queryParam}`, $options: 'i'}}
    ])
        .then(users => {
            res.json({users});
        })
        .catch(err => console.error(err));
}

// get user friends info
exports.getFriends = (req, res) => {
    const userId = req.decoded.sub;
    UserModel.findById(userId,
        'friends',
        (err, data) =>{
            if(err){
                res.json({success: false, message: err});
            } else {
                UserModel
                    .find({} , {'password': 0})
                    .where('_id')
                    .in(data.friends)
                    .exec((err, users) => {
                        if(err){
                            res.json({success: false, message: err});
                        } else {
                            res.json({success: true, message: users});
                        }
                    })
            }
        }
    );
}

// add friends for both when only one is placing request
exports.addFriend = (req, res) => {
    const userId = req.decoded.sub;
    const friendId = req.body.id;
    UserModel.findByIdAndUpdate({
        _id: userId
    },{
        $push: {friends: friendId}
    }, (err, data) => {
        if(err){
            res.json({success: false, message: err});
        } else {
            UserModel.findByIdAndUpdate({
                _id: friendId
            }, {
                $push: {friends: userId}
            }, (err, data) => {
                if(err){
                    res.json({success: false, message: err});
                } else {
                    res.json({success: true, message: 'success'});
                }
            });
        }
    });
}

    exports.removeFriend = (req, res) => {
        const userId = req.decoded.sub;
        const friendId = req.body.id;
        UserModel.findByIdAndUpdate({
            _id: userId
        },
        {
            $pull: {"friends": friendId}
        }, (err, data) => {
            if(err){
                res.json({success: false, message: err});
            } else {
                UserModel.findByIdAndUpdate({
                    _id: friendId
                }, {
                    $pull: {friends: userId}
                }, (err, data) => {
                    if(err) {
                        res.json({success: false, message: err});
                    } else {
                        res.json({success: true, message: 'success'});
                    }
                });
            }
        });
    }
