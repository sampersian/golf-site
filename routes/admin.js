"use-strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hi',req.user);
  res.render('admin/admin', {user: req.user});
});

router.get('/newTournament', function (req, res, next) {
  res.render('admin/newTournament')
})

router.post('/newTournament', function (req, res, next) {
  console.log(req.body);
  queries.addNewTournament(req.body.tournamentName, req.body.tournamentIsPrivate, queries.userId(req.user))
  .then(function(data) {
    res.render('admin/newTournament');
  })
})




module.exports = router;
