'use strict';
const reConsts = require('./regexpConstants');
const UserModel = require('../Schemas/UserSchema');

const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const secretConfig = require('./config.json');

const allowedImgExts = [
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/png"
];

// validate inputs mdl
exports.validateInputData = async (req, res, next) => {
    let userInfo = req.body;
    let checkEmail = userInfo.email;
    let imgData = req.file 

    UserModel.find({email: checkEmail}, (err, data) => {
        if(data.length && !userInfo){
            sendResponse("User already exists!", 409);
        } else {
            // validation check
            if(!(reConsts.regExpName.test(userInfo.name))){
                sendResponse("Name is not valid.", 403);
            } else if(!(reConsts.regExpName.test(userInfo.surname))){
                sendResponse("Surname is not valid", 403);
            } else if(!(reConsts.regExpName.test(userInfo.midname))){
                sendResponse("Midname is not valid", 403);
            } else if(!(reConsts.regExpEmail.test(userInfo.email))){
                sendResponse("Email is not valid", 403);
            } else if(!userInfo.gender){
                sendResponse("Gender is not specified", 403);
            } else if(!userInfo.age){
                sendResponse("Age is not specified", 403);
            } else if(!allowedImgExts.includes(imgData.mimetype) || 1000 > imgData.size > 5000000){
                sendResponse("File is not valid (unsupported ext. or wrong size)", 403);
            } else {
                next();
            }
        }
    });
    

    let sendResponse = (message, statusCode) => {
        fs.unlinkSync(path.join(__dirname, '..', imgData.path));
        res.status(400).json({message: message, statusCode});
    }
};

// validate token mdl
exports.checkToken = (req, res, next) =>{
    if(req.headers) {
        jwt.verify(req.headers.authorization.split(' ')[1], secretConfig.secret, (err, decoded) => {
            const date = new Date().getTime();
            if(err || (decoded && date < decoded.exp)){
                return res.status(403).send({auth: false, message: "Failed to authenticate token!"});
            }
            req.decoded = decoded;
            next();
        })
    } else {
        res.status(401).send({auth: false, message: "No token provided"});
    }
}

