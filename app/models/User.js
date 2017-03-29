const mongoose = require('mongoose');
const passport = require('passport');
const validator = require('validator');
const crypto = require('crypto');  
const Schema = mongoose.Schema; 

var userSchema = new Schema({
	email: String,
	password: String
}); 

/**
 * Create a new user
 */
userSchema.statics.create = function(user, callback) {
	console.log('userSchema.statics.create()'); 
	console.log('user.email: ' + user.email); 

	// If valid email format
	if (validator.isEmail(user.email) === true) {
		console.log('Valid email!'); 

		// Hash password
		user.password = User.hash(user.password); 

		// Create a new User object
		var newUser = new User(user); 

		// Save the new User object to database
		newUser.save(function(err) {
			// If no error, err object will be null
			callback(err, newUser); 
		});
	} 
	
	// If invalid email format
	else {
		console.log('Invalid email format'); 
		
		let errObj = {
			name: 'InvalidFormatError',
			message: 'An invalid email format. '
		}; 

		callback(errObj, null); 
	}
};

userSchema.methods.getNoteBooks = function(cb) {

}; 

userSchema.statics.hash = function(password) {
	return crypto.createHash('sha1').update(password).digest('base64');  
}; 

var User = mongoose.model('User', userSchema); 

module.exports = User;