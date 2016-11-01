const express = require('express');
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var morgan = require('morgan')
app.use(morgan('combined'));

// nunjucks
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

// Middleware
// static files
app.use(express.static('public'));

var db = require('./models');
db.sync()
.then(() => app.listen(3000))
.catch(console.error);

const router=require('./routes')
app.use('/',router)

//catch 404 (i.e., no route was hit) and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // handle all errors (anything passed into `next()`)
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   console.error(err);
//   res.send("Internal Server Error");
// });
// app.listen(3000)
