var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ranking3'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM book3',function (error, results, fields){
    if (error) throw error;
    console.log(results);
    console.log(typeof(results));
      res.render('book3', {data:{
        'title': 'ランキング',
        'publisher':'出版社',
      content : results}});
});

connection.end();

});


module.exports = router;
