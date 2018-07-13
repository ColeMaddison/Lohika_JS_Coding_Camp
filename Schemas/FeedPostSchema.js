'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedPostSchema = new Schema({
    userId: {type: String, required: true},
    userImage: {type: String, required: true},
    userName: {type: String, required: true},
    userSurname: {type: String, required: true},
    date: {type: String},
    image: {type: String, default: ''},
    text: {type: String, default: ''}
});

module.exports = mongoose.model('FeedPostModel', FeedPostSchema);