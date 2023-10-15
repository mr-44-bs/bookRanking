const port = 3000

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ranking'
});
 
connection.connect();
 
connection.query('SELECT * FROM book', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
 
connection.end();