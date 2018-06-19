'use strict';

const expressJwt = require('express-jwt');
const config = require('./config.json');

// use that function to make exception for the auth rout, ecausbe it does not need for the user authenticated
let jwt = () => {
    const secret = config.secret;
    return expressJwt({secret}).unless({
        path: [
            '/signup',
            '/authenticate'
        ]
    });
};

module.exports = jwt;