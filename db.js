const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '34.31.249.114', // Use the Cloud SQL instance connection name here
  user: 'tish1997',
  password: 'tish1997!q',
  database: 'aquartic',
});

module.exports = pool;

const testConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: '34.31.249.114', // Use the Cloud SQL instance connection name here as well
      user: 'tish1997',
      password: 'tish1997!q',
      database: 'aquartic',
    });

    await connection.query('SELECT * from users');
    console.log('Connection to the database successful.');
    connection.end();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Call the testConnection function to perform the connectivity test
testConnection();
