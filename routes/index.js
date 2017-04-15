"use strict"

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

// DATABASE QUERIES
var queries = require('../db/queries');

// MIDDLEWARE
var passport = require('../passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// MIDDLEWARE
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(cookieParser());
router.use(bodyParser.json());


// ROUTES
router.get('/', function(req, res, next) {
  res.render('index', { title: "Golf Site"});
});

router.get('/newAdmin', function (req, res, next) {
  res.render('newAdmin')
})

router.post('/newAdmin', function (req, res, next) {
  console.log(req.body);
    queries.getSingleUserByUsername(req.body.userSignupUsername).then(function(data){
      if(data.length===0){
        queries.addNewUser(req.body.userSignupFirst, req.body.userSignupLast, req.body.userSignupUsername, req.body.userSignupPassword, req.body.userSignupEmail,req.body.userPic)
        .then(function(data){
          res.redirect('/');
        });
      }
      else{
        res.render('newAdmin',{errorMessage:"Username Already Taken Error # 4!"});
      }
    })
})

module.exports = router;
