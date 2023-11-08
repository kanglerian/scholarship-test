require('dotenv').config();
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let categoriesRouter = require('./routes/categories');
let questionsRouter = require('./routes/questions');
let answersRouter = require('./routes/answers');
let recordsRouter = require('./routes/records');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);
app.use('/records', recordsRouter);

module.exports = app;