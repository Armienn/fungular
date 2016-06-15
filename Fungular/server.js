var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(path.join(__dirname, '/node_modules')));
app.use(methodOverride());


app.get('/api/todos', function (req, res) {
	
	res.json({ name: "Jørgen", occupation: "fisketæmmer" });
});

// create todo and send back all todos after creation
app.post('/api/todos', function (req, res) {
	
	res.json({ name: "Jørgen", occupation: "tangtrækker" });
});

// application -------------------------------------------------------------
app.get('/systemjs.config.js', function (req, res) {
	res.sendFile(path.join(__dirname, '/systemjs.config.js')); // load the single view file (angular will handle the page changes on the front-end)
});
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

//// error handlers

//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function (err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

//// production error handler
//// no stacktraces leaked to user
//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

app.listen(8080);
console.log("App listening on port 8080");
