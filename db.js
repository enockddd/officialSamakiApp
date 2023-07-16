const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'aquartic.mysql.pythonanywhere-services.com',
  user     : 'aquartic',
  password : 'Myapplication',
  database : 'enockddd$aquartic',
  
});

module.exports = pool;

