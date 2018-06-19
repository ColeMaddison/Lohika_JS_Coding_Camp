'use strict';

const config = require('./config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../Schemas/UserSchema');


async function authenticate({userEmail, password}) {
    const user = await UserModel.findOne({ userEmail });

    if(user && bcrypt.compareSync(password, user.userPassword)) {
        const { userPassword, ...restInfo } = user.toObject();
        const token = jwt.sign({sub: user._id}, config.secret);
        return {
            ...restInfo,
            token
        };
    }
};

module.exports = authenticate;

