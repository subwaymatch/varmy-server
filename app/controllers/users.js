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
	console.log('UserController.signUp()'); 
	console.log(req.body); 

	User.create(req.body, (err) => {
		if (err) {
			console.log('err:'); 
			console.log(err); 
			res.redirect('/'); 
		}

		else {
			console.log('Successful'); 
			res.redirect('/login'); 
		}
	});
};

UserController.logout = function(req, res) {
	req.logout();
	res.redirect('/');
}; 

UserController.renderProfilePage = function(req, res) {
	res.render('user/profile', {
		email: req.user.email
	});
};

module.exports = UserController; 