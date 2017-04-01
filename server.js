const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const AuthenticationController = require(path.join(__dirname, '/app/controllers/authentication.js'));
const db = require(path.join(__dirname, '/app/models/db'));
const pug = require('pug');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
	extended: false
}));

// This should be placed before initializing passport in AuthenticationController
app.use(session({
	store: new RedisStore({
		host: 'localhost',
		port: 6379,
		client: redis.createClient()
	}),
	secret: 'some secret key',
	resave: false,
	saveUninitialized: false
}));

// Initialize db
db.init();

// Initialize authentication controller
AuthenticationController.init(app);

// Routers
let APIRouter = require(path.join(__dirname, '/app/routes/APIRouter.js'));
let MainRouter = require(path.join(__dirname, '/app/routes/MainRouter.js'));

// Public files directory
app.use(express.static('app/public'));

// Template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));

// Set pretty print
app.locals.pretty = true;

// Route API calls to appropriate routes
app.use('/api/v1', APIRouter);
app.use('/', MainRouter);

app.listen(port, function() {
	console.log(`Listening to port ${port}. `)
});