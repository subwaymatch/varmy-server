const passport = require('passport');
const User = require('./../models/User'); 

let UserController = {};

UserController.renderLogInPage = function(req, res) {
	res.render('user/login');
};

UserController.login = passport.authenticate('local', {
	successReturnToOrRedirect: '/profile',
	failureRedirect: '/login'
}); 

UserController.renderSignUpPage = function(req, res) {
	res.render('user/signup');
};

UserController.signUp = function(req, res) {
	User.create(req.body, (err, newUser) => {
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
		user: req.user
	});
};

module.exports = UserController; 