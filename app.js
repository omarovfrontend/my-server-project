const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT ?? 3000;

const indexRouter = require('./routes/indexRouter');
const postRouter = require('./routes/postRouter');
const jokeRouter = require('./routes/jokeRouter');

const app = express();
hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));

// middleware
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true })); // чтоб распарсила данные поля и формы
app.use(express.json()); // чтоб были переданы в body json

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/joke', jokeRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
