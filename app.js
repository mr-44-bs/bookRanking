var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var rankingRouter = require('./routes/ranking');
var book3Router = require('./routes/book3');
var pageTopRouter = require ('./routes/page-top');
var selectRouter = require('./routes/select');
var dvdRouter = require('./routes/dvd');
var cdRouter = require('./routes/cd');
var loginRouter = require('./routes/login');
var helloRouter = require('./routes/hello');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', pageTopRouter);
app.use('/book3', book3Router);
app.use('/ranking', rankingRouter);
app.use('/select', selectRouter);
app.use('/dvd', dvdRouter);
app.use('/cd', cdRouter);
//app.use('/', loginRouter);
app.use('/', indexRouter);
//app.use('/hello', helloRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;