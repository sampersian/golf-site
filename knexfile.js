"use strict"
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'golf-site'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
