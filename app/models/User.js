const mongoose = require('mongoose');
const passport = require('passport');
const validator = require('validator');
const crypto = require('crypto');  
const Schema = mongoose.Schema; 

var userSchema = new Schema({
	email: String,
	password: String
}); 

var User = mongoose.model('User', userSchema); 

/**
 * Create a new user
 */
userSchema.statics.create = function(user, callback) {
	// If valid email format
	if (validator.isEmail(user.email) === true) {
		// Hash password
		user.password = User.hash(user.password); 

		// Create a new User object
		var newUser = new User(user); 

		// Save the new User object to database
		newUser.save(function(err, insertedUser, rowsAffected) {
			// If no error, err object will be null
			return callback(err, newUser); 
		});
	} 
	
	// If invalid email format
	else {
		let errObj = {
			name: 'InvalidFormatError',
			message: 'An invalid email format. '
		}; 

		return callback(errObj, null); 
	}
};

userSchema.statics.hash = function(password) {
	return crypto.createHash('sha1').update(password).digest('base64');  
}; 

module.exports = User;