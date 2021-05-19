const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1113',
  database: 'crown2_408410727',
});

module.exports = pool.promise();
