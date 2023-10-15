var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ranking2'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

  connection.query('select * from book2 order by selling desc;',function (error, results, fields){
    if (error) throw error;
    // console.log(results);
    console.log(typeof(results));
    
      res.render('ranking', {data:{
        'title': 'ランキング',
        'author':'著者名',
      content : results}});
});

connection.end();

});

module.exports = router;
