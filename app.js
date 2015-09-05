var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mysql = require('mysql');
//var routes = require('./routes/index');
//var users = require('./routes/users');
connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'M@rio',
    database:'evaluaciondb'
})



var app = express();
var login = require('./controllers/login');
var login_doc=require('./controllers/login_doc');
var login_dec=require('./controllers/login_dec');
var home = require('./controllers/home');
var homeD=require('./controllers/homeD');
var homeDe=require('./controllers/homeDe');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret:"palabrasecreta",
                cookie:{maxAge:3600000},
                resave:true,
                saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(login);
app.use(home);
app.use(login_doc);
app.use(homeD);
app.use(login_dec);
app.use(homeDe);
//app.use('/', routes);
//app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
