const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res) {
	res.render('index', {
		title: 'Vocapin'
	});
});

router.get('/login', function(req, res) {
	res.render('login');
});

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

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