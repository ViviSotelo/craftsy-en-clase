var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { sendfile } = require('express/lib/response');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'index.html')))
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'login.html')))
app.get('/product-carri', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'productCart.html')))
app.get('/product-detalle', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'productDetal.html')))
app.get('/registro', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'register.html')))
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
