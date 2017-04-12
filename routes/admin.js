"use-strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

router.get('/newadmin', function (req, res, next) {
  res.render('newadmin')
})

router.post('/newadmin', function (req, res, next) {
  console.log(req.body);
    queries.getSingleUserByUsername(req.body.userSignupUsername).then(function(data){
      if(data.length===0){
        queries.addNewUser(req.body.userSignupFirst, req.body.userSignupLast, req.body.userSignupUsername, req.body.userSignupPassword, req.body.userSignupEmail,req.body.userPic)
        .then(function(data){
          res.redirect('/');
        });
      }
      else{
        res.render('signup',{errorMessage:"Username Already Taken Error # 4!"});
      }
    })
})


module.exports = router;
