"use strict"

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

// DATABASE QUERIES
var query = require('../db/queries');

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

module.exports = router;
