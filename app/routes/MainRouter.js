const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('./../controllers/users.js'); 

router.get('/', function(req, res) {
	res.render('index', {
		title: 'Vocapin'
	});
});

router.get('/login', UserController.renderLogInPage);
router.get('/signup', UserController.renderSignUpPage); 
router.post('/signup', UserController.signUp); 
router.get('/logout', UserController.logout);

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/'
}));

router.get('/profile', passport.authenticationMiddleware(), renderProfile);


function renderProfile(req, res) {
	res.render('user/profile', {
		username: req.user.username
	});
}

module.exports = router;