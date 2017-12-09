require('babel-register');
var mongoose= require('mongoose')
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');
var cookieParser = require('cookie-parser')

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('../app/routes');
var _= require('underscore')

var async = require('async');
var request = require('request');
var xml2js = require('xml2js');


var DefaultVariables = require('./models/default');
var defaultRoute = require('./routes/default');
var Admin = require("./models/admin.js");
var admin = require("./routes/admin.js");
var index = require('./routes/index.js')
var Blogs = require('./models/blogs');
var blogs = require('./routes/blogs');



var config = require('./config')

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 4000);
app.use(session({
    saveUninitialized: true,
    secret: 'secret',
    key: 'user',
    resave: true,
    s: false,
    cookie: {maxAge: null, secure: true}
}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT SESSION
passport.serializeUser(function(user, done){
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    Admin.findById(id, function(err, user){
        if(err) done(err);
        done(null, user);
    });
});
passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
    },
    function(req, username, password, done){
        Admin.findOne({username: username}, function(err, user){
            if(err) throw err;
            if(!user){
                return done(null, false);
            }
            user.comparePassword(password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                }else{
                    done(null, false);
                }
            });
        });
    }
));


app.use("/defaults", defaultRoute);
app.use('/blogs', blogs)
app.use('/', index);

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('server/views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
