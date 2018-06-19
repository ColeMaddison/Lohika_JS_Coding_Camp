'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {type: String, required: true},
    userPassword: {type: String, required: true}, //hash
    useSurname: {type: String, required: true},
    useMidName: {type: String},
    userEmail: {type: String, required: true, unique: true},
    userGender: {type: String, required: true},
    userAge: {type: Number, required: true},
    userPhotoLink: {type: String, required: true},
});


module.exports = mongoose.model('UserModel', UserSchema);