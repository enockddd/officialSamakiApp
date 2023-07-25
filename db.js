const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit: 10,
  socketPath: '/cloudsql/fiery-azimuth-393715:us-central1:tish1997',
  user: 'tish1997',
  password: 'tish1997!q',
  database: 'aquartic',
  
});

module.exports = pool;


