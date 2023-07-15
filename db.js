const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'aquartic.mysql.pythonanywhere-services.com',
  user     : 'aquartic',
  password : 'Myapplication',
  database : 'aquartic',
  
});

module.exports = pool;


// const mysql = require('mysql');

// const pool  = mysql.createPool({
//   connectionLimit : 10,
//   host     : 'enockddd.mysql.pythonanywhere-services.com',
//   user     : 'enockddd',
//   password : 'tish1997!q',
//   database : 'aquartic',
  
// });

// module.exports = pool;
