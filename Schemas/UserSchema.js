'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true}, //hash
    surname: {type: String, required: true},
    midName: {type: String},
    email: {type: String, required: true, unique: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    photoLink: {type: String, required: true},
    friends: [{type: String}]
});


module.exports = mongoose.model('UserModel', UserSchema);