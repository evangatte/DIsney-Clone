// This file starts the express server application
//
// The `npm run server` command will run the `server` script in the package.json,
// which then runs another command to start the server

const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const local = require('./strategies/local');

require('./src/db').setup();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('dist'));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// Routes
app.get('/', function (req, res) {
    res.redirect('/home/show');
});
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/product', require('./routes/product'));
app.use('/admin', require('./routes/admin'));
app.use('/registration', require('./routes/registration'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
