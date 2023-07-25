const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '34.31.249.114', // Use the Public IP address of your Cloud SQL instance
  user: 'tish1997',
  password: 'tish1997!q',
  database: 'aquartic',
});

module.exports = pool;
