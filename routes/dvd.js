var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 't_store'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM dvd',function (error, results, fields){
    if (error) throw error;
    console.log(results);
    console.log(typeof(results));
    
      res.render('dvd',{data:{
      content : results}});
});

connection.end();

});

module.exports = router;