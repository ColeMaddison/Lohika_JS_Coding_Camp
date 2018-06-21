'use strict';

const UserModel = require('../Schemas/UserSchema');
const fs = require('fs');
let path = require('path');
const allowedImgExts = [
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/png"
];

exports.validateInputFields = async (req, res, next) => {
    let userInfo = req.body;
    let checkEmail = userInfo.email;
    let imgPath = req.file.path;

    UserModel.find({email: checkEmail}, (err, data) => {
        if(data.length){
            sendResponse("User already exists!", 409);
        } else {
            // validation check
            if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.name))){
                sendResponse("Name is not valid.", 403);
            } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.surname))){
                sendResponse("Surname is not valid", 403);
            } else if(!(/^$|^([a-zA-Z]{1,32})$/.test(userInfo.midname))){
                sendResponse("Midname is not valid", 403);
            } else if(!(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(userInfo.email))){
                sendResponse("Email is not valid", 403);
            } else if(!userInfo.gender){
                sendResponse("Gender is not specified", 403);
            } else if(!userInfo.age){
                sendResponse("Age is not specified", 403);
            } else if(!allowedImgExts.includes(req.file.mimetype) || 1000 > req.file.size > 5000000){
                sendResponse("File is not valid (unsupported ext. or wrong size)", 403);
            } else {
                next();
            }
        }
    });
    

    let sendResponse = (message, statusCode) => {
        fs.unlinkSync(path.join(__dirname, '..', imgPath));
        res.status(400).json({message: message, statusCode});
    }
};