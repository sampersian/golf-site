"use-strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hi',req.user);
  queries.getAdminTournaments(req.user).then(function(data) {
    console.log("about to log what i think is/are the tournaments for", req.user);
    console.log(data);
    res.render('admin/admin', {user: req.user, user_tournaments: data});
  })
});

// GET NEW TOURNAMENT
router.get('/newTournament', function (req, res, next) {
  res.render('admin/newTournament')
})

// POST NEW tournament
router.post('/newTournament', function (req, res, next) {
  console.log(req.body);
  queries.addNewTournament(req.body.tournamentName, req.body.tournamentIsPrivate, queries.userId(req.user))
  .then(function(data) {
    res.render('admin');
  })
})

// GET view tournament

router.get('/tournament/:tournament_id', function (req, res, next) {
  console.log("viewing tournament",req.params.tournament_id);
  queries.getOneTournament(req.params.tournament_id)
  .then(function(data) {
    console.log("this is what i got ", data)
    res.render('admin/tournament', {
      tournament: data[0]
    })
  })
})

// GET NEW event

router.get('/tournament/:tournament_id/newEvent', function (req, res, next) {
  res.render('admin/newEvent', {
    tournament_id: req.params.tournament_id
  })
})

// POST NEW event

router.post('/tournament/:tournament_id/newEvent', function (req, res, next) {
  console.log(req.body);
  queries.addNewEvent(req.params.tournament_id, req.body.eventYear);
})


// GET view event

router.get('/event', function (req, res, next) {
  res.render('admin/event')
})

// GET NEW player

router.get('/newPlayer', function (req, res, next) {
  res.render('admin/newPlayer')
})

// POST NEW PLAYER

// GET NEW team

router.get('/newTeam', function (req, res, next) {
  res.render('admin/newTeam')
})

// POST NEW team

// GET NEW result

router.get('/newResult', function (req, res, next) {
  res.render('admin/newResult')
})

// POST NEW result

// GET NEW SPECAIAL awards

router.get('/newSpecialAward', function (req, res, next) {
  res.render('admin/newSpecialAward')
})

// POST NEW SPECIAL awards





module.exports = router;
