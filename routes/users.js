var express = require('express');
var router = express.Router();

var mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rental'
});

connection.connect();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
  content:'名前・パスワードを入力してください。'
});

module.exports = router;
