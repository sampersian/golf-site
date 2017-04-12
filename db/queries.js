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

function User(){
  return knex('user');
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
  return User().insert({
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: hashPassword(password),
    email: email,
    image_url: url
  });
}

function getSingleUserByUsername(username){
	return User().where('username',username);
}


module.exports = {
  User,
  addNewUser,
  getSingleUserByUsername
}
