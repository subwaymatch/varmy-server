const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {
	email: String,
	password: String
});

var newUser = new User({
	email: 'test@a.com',
	password: 'eitkeirit'
});

newUser.save(function(err) {
	if (err) console.log(err);
	else console.log('newUser');
});

var hash = function(password) {
	return crypto.createHash('sha1').update(password).digest('base64');
};

module.exports = User;