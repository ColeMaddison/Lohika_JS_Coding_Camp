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
    console.log(userInfo);
    let checkEmail = userInfo.email;
    let imgPath = req.file.path;

    let imgRemove = (imgPath) => {
        // had to use sync method, async needs to have a callback - do not see profit of it
        fs.unlinkSync(path.join(__dirname, '..', imgPath));
    };

    UserModel.find({email: checkEmail}, (err, data) => {
        if(data.length){
            imgRemove(imgPath);
            res.status(400).end(JSON.stringify({message: "User already exists!"}));
        } else {
            // validation check
            if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.name))){
                imgRemove(imgPath);
                res.status(400).json({message: "Name is not valid."});
            } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.surname))){
                imgRemove(imgPath);
                res.status(400).json({message: "Surname is not valid"});
            } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.midname))){
                imgRemove(imgPath);
                res.status(400).json({message: "Miname is not valid"});
            } else if(!(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(userInfo.email))){
                imgRemove(imgPath);
                res.status(400).json({message: "Email is not valid"});
            } else if(!userInfo.gender){
                imgRemove(imgPath);
                res.status(400).json({message: "Gender is not specified"});
            } else if(!userInfo.age){
                imgRemove(imgPath);
                res.status(400).json({message: "Age is not specified"});
            } else if(!allowedImgExts.includes(req.file.mimetype) || 1000 > req.file.size > 5000000){
                imgRemove(imgPath);
                res.status(400).json({message: "File is not valid (unsupported ext. or wrong size)"});
            } else {
                next();
            }
        }
    });
};