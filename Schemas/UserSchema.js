'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: String,
    useSurname: String,
    useMidName: String,
    userEmail: String,
    userGender: String,
    userAge: Number,
    userPhotoLink: String
});


module.exports = mongoose.model('UserModel', UserSchema);