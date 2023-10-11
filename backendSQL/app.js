var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var guineapigRouter = require('./routes/guineapig');
const mysql = require('mysql2')

var app = express();

app.locals.con = mysql.createConnection({
    host: "localhost",
    port: "8889",
    database: "guineapigs",
    user: "guineapigs",
    password: "guineapigs"
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/guineapigs', guineapigRouter);

module.exports = app;
