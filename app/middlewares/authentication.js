function authenticationMiddleware() {
	return function(req, res, next) {
		console.log('authenticationMiddleware()');
		if (req.isAuthenticated()) {
			console.log('isAuthenticated() == true');
			return next();
		}

		console.log('isAuthenticated() == false');
		res.redirect('/');
	}
}

module.exports = authenticationMiddleware;