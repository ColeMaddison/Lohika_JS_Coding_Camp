'use strict';

const config = require('./config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../Schemas/UserSchema');


async function authenticate({email, password}) {
    // console.log(email, password, '------------');
    const user = await UserModel.findOne({ email: email });
    if(user && bcrypt.compareSync(password, user.password)) {
        const { password, ...restInfo } = user.toObject();
        const token = jwt.sign({sub: user._id}, config.secret);
        return {
            ...restInfo,
            token
        };
    }
};

module.exports = authenticate;

