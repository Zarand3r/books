//Initialize
const express = require('express');
const expressValidator = require('express-validator');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const flash = require('express-flash');

const app = express();

 /**
 * API keys and Passport configuration.
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({
    path: '.env.auth'
});


//Environmental variables, settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //path for views
app.set('view engine', 'ejs');

//Mongodb databse connection
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

//Universal middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('public')); //public resources such as css/js come from here

app.use(session({ //creates session, saved to by passport
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
        autoReconnect: true
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //module to flash errors in forms


app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use(function(req, res, next) {
    // After successful login, redirect back to the intended page
    if (!req.user &&
        req.path !== '/account/login' &&
        req.path !== '/account/signup' &&
        !req.path.match(/^\/auth/) &&
        !req.path.match(/\./)) {
        req.session.returnTo = req.path;
    }
    next();
});

//Load routes
require('./routes')(app);

//Start server
var server = app.listen(app.get('port'), function() {
  console.log('App started');
});