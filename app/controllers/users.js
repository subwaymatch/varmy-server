const passport = require('passport');
const User = require('./../models/User'); 

var UserController = {}; 

UserController.renderLogInPage = function(req, res) {
	res.render('user/login');
};

UserController.login = passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/'
}); 

UserController.renderSignUpPage = function(req, res) {
	res.render('user/signup');
};

UserController.signUp = function(req, res) {
	console.log('sign up'); 
	res.redirect('/'); 
};

UserController.logout = function(req, res) {
	req.logout();
	res.redirect('/');
}; 

UserController.renderProfilePage = function(req, res) {
	res.render('user/profile', {
		username: req.user.username
	});
};

module.exports = UserController; 