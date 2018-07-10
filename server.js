'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const bodyParser = require('body-parser');

const auth = require('./serverHandlers/authHandler');
const ctrl = require('./serverHandlers/controllers');
const mdl = require('./serverHandlers/middleware');
const routes = require('./routes');

const app = express();
app.use(express.static(__dirname + '/uploads'));

let mongoose = require('mongoose');

// create db
mongoose.connect('mongodb://localhost/lhk');

let db = mongoose.connection;

// check db connection
db.on('error', console.error.bind(console, 'We have a db error:'));
db.on('open', () => {
    console.log('Connection established!');
});

// sighn up route with form fields validation
app.post(routes.signupRoute, upload.single('file'), mdl.validateInputData, (req, res) => {
    ctrl.signup(req,res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// login
app.post(routes.loginRoute, (req, res) => {
    auth(req.body)
        .then(user => user ? res.status(200).json({message: "Login Successful", userToken: user.token}) : res.status(400).json({message: "Username or password incorrect!"}))
        .catch(err => console.error(err));
});

// account display user data
app.get(routes.accountRoute, mdl.checkToken, (req, res) => {
    ctrl.userAccount(req, res);
});

// modify user account data
app.put(routes.accountRoute, upload.single('file'), mdl.validateInputData, mdl.checkToken, (req, res) => {
    ctrl.modifyUserAccount(req, res);
});

// search people
app.get(routes.searchRoute, mdl.checkToken, (req, res) => {
    ctrl.searchUser(req, res);
});

// get all friends -- do that when implementing friends list
// app.get(routes.getFriendsRoute, mdl.checkToken, (req, res) => {
//     ctrl.getFriends(req, res);
// });

// add friends
app.post(routes.addFriendRoute, mdl.checkToken, (req, res) => {
    ctrl.addFriend(req, res);
});

// remove user from friends list
app.delete(routes.removeFriendRoute, mdl.checkToken, (req, res) => {
    ctrl.removeFriend(req, res)
});

// logout
app.get(routes.logoutRoute, (req, res) => {
    ctrl.signout(req, res);
})

// get all db data
app.get(routes.dbData, (req, res) => {
    ctrl.getDbData(req, res);
});

// drop db data
app.get(routes.dropDb, (req, res) =>{
    ctrl._dropDb(req,res);
});

// '/*' default route
app.get(routes.anyRoute, (req, res) => {
    ctrl.pageNotFound(req,res);
});

// make sure nothing is on port PORT, because will be fetching data via react through that port
let PORT = process.env.PORT || 3334;

app.listen(PORT, () =>{
    console.log(`Server is up and running on port: ${PORT}`);
});

