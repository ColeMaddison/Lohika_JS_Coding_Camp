'use strict';

const allowedImgExts = [
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/png"
];

exports.validateInputFields = (req, res, next) => {
    let userInfo = req.body;
    console.log(userInfo);

    // validation check
    if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.name))){
        res.json({message: "Name is not valid."});
    } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.surname))){
        res.json({message: "Surname is not valid"});
    } else if(!(/^([a-zA-Z]{1,32})$/.test(userInfo.midname))){
        res.json({message: "Miname is not valid"});
    } else if(!(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(userInfo.email))){
        res.json({message: "Email is not valid"});
    } else if(!userInfo.gender){
        res.json({message: "Gender is not specified"});
    } else if(!userInfo.age){
        res.json({message: "Age is not specified"});
    } else if(!allowedImgExts.includes(req.file.mimetype) || 1000 > req.file.size > 5000000){
        res.json({message: "File is not valid (unsupported ext. or wrong size)"});
    } else {
        next();
    }
};