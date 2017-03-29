const path = require('path'); 
const User = require('./../models/User'); 

var UserController = {}; 

UserController.renderLogInPage = function(req, res) {
	res.render('user/login');
}; 

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

module.exports = UserController; 