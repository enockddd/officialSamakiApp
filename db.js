const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'enockddd.mysql.pythonanywhere-services.com',
  user: 'enockddd',
  password: 'tish1997!q',
  database: 'aquartic',
  idleTimeoutMillis: 30000, // Set the idle timeout to 30 seconds (adjust as needed)
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
