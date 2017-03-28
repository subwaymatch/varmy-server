const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authenticationMiddleware = require('./../middlewares/authentication.js');

let AuthenticationController = {};

function findUser(username, callback) {
	if (username === user.username) {
		return callback(null, user);
	}

	return callback(null);
}

// Test data
var user = {
	username: 'user',
	password: 'pass',
	id: 1
};

/**
 * Initialize authentication controller for app
 *
 * @param app Express app
 */
AuthenticationController.init = function(app) {
	passport.serializeUser(function(user, callback) {
		callback(null, user.username);
	});

	passport.deserializeUser(function(username, callback) {
		findUser(username, callback);
	});

	passport.authenticationMiddleware = authenticationMiddleware;

	passport.use(new LocalStrategy(
		function(username, password, done) {
			findUser(username, function(err, user) {
				if (err) {
					return done(err);
				}

				if (!user) {
					return done(null, false);
				}

				if (password !== user.password) {
					return done(null, false);
				}

				return done(null, user);
			});
		}
	));

	app.use(passport.initialize());
	app.use(passport.session());
};


module.exports = AuthenticationController;