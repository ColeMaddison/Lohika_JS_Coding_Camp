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

    let imgRemove = (imgPath) => {
        fs.unlinkSync(path.join(__dirname, '..', imgPath));
    };

    UserModel.find({userEmail: checkEmail}, (err, data) => {
        if(data.length){
            imgRemove(imgPath);
            res.end(JSON.stringify({message: "User already exists!"}));
        }
    });

    // validation check
    if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.name))){
        imgRemove(imgPath);
        res.json({message: "Name is not valid."});
    } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.surname))){
        imgRemove(imgPath);
        res.json({message: "Surname is not valid"});
    } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.midname))){
        imgRemove(imgPath);
        res.json({message: "Miname is not valid"});
    } else if(!(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(userInfo.email))){
        imgRemove(imgPath);
        res.json({message: "Email is not valid"});
    } else if(!userInfo.gender){
        imgRemove(imgPath);
        res.json({message: "Gender is not specified"});
    } else if(!userInfo.age){
        imgRemove(imgPath);
        res.json({message: "Age is not specified"});
    } else if(!allowedImgExts.includes(req.file.mimetype) || 1000 > req.file.size > 5000000){
        imgRemove(imgPath);
        res.json({message: "File is not valid (unsupported ext. or wrong size)"});
    } else {
        next();
    }
};