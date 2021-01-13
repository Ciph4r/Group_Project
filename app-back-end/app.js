const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const fileUpload = require('express-fileupload')
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/userRouter');
const carRouter = require('./routes/cars/carRouter');
const inboxRouter = require('./routes/inbox/inboxRouter');
const app = express();

app.use(fileUpload())
app.use(cors());
// app.use(express.json({limit: '1mb'}));
// app.use(express.urlencoded({limit: '1mb'}));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch(() => {
    console.log('server err');
  });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/cars' , carRouter)
app.use('/api/inbox' , inboxRouter)
// app.use('/api/users', usersRouter);
// app.use('/api/cars' , carRouter)
// app.use('/api/inbox' , inboxRouter)
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
