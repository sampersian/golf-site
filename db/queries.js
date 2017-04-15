"use strict"

var knex = require('./knex');
var bcrypt = require('bcrypt');


function today() {
  var d = new Date();
  d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );
  var n = d.getDay();
  let days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  }
  return days[n];
}


function hashPassword(password) {
	return bcrypt.hashSync(password, 10);
};

function user(){
  return knex('user');
}

function userId(user) {
  return knex('user').where('username', user).select('id');
}

function addNewUser(first_name, last_name, username, password, email, url){

  if (!username || !password) return false;
  console.log({
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: hashPassword(password),
    email: email,
    image_url: url
  });
  return user().insert({
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: hashPassword(password),
    email: email,
    image_url: url
  });
}

function getSingleUserByUsername(username){
	return user().where('username',username);
}

function tournament() {
  return knex('tournament');
}

function addNewTournament(name, isPrivate, adminId) {
  if (!name || !isPrivate) return false;

  if (isPrivate === "false") isPrivate = false;
  if (isPrivate === "true") isPrivate = true;

  console.log({
    name: name,
    isPrivate: isPrivate,
    adminId: adminId
  });

  return knex('tournament').returning('id').insert({
    name: name,
    isPrivate: isPrivate
  }).then(function(data) {
    let newTournamentId = data[0];
    console.log('new tournamnet id', newTournamentId);
    return knex('admin_tournament').insert({
      admin_id: adminId,
      tournament_id: newTournamentId
    })
  })
}



module.exports = {
  user,
  userId,
  addNewUser,
  getSingleUserByUsername,
  tournament,
  addNewTournament
}
