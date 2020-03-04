var express = require('express');
var router = express.Router();

//crypto.js
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var uid2 = require("uid2");

//db models
var UserModel = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function(req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var mail = req.body.mail;
  var pswd = req.body.password;

  var user = await UserModel.findOne({
    userEmail: mail
  });

  if(!user) {

    var salt = uid2(32);
    var newUser = new UserModel ({
    userName: lastname,
    userFirstname: firstname,
    userEmail: mail,
    salt: salt,
    userPassword: SHA256(pswd + salt).toString(encBase64),
    token: uid2(32)
    });

    var userSaved = await newUser.save();
    
    //result
    res.json({result: true, user: userSaved});
  } 
  
  else {

    //result
    res.json({result: false, user: user}); 
  }
});

router.post('/signin', async function(req, res, next) {
  var mail = req.body.mail;
  var pswd = req.body.password;
  await UserModel.findOne({ userEmail: mail }).exec(function (err, user) {
    if (user) {
      var hash = SHA256(pswd + user.salt).toString(encBase64);
      if (user.userPassword === hash) {
        res.json({result: true, user: user});
      } else {
        res.json({result: false, exist: true});
      } 
    } else {
      res.json({result: false, exist: false});
    }
  });
});

module.exports = router;
