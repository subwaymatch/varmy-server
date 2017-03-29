const mongoose = require('mongoose');
const passport = require('passport');
const validator = require('validator'); 
const Schema = mongoose.Schema; 

var userSchema = new Schema({
	email: Boolean,
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
		user.password = User.hash(password); 

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
		callback({
			message: 'An invalid email format'
		}, null); 
	}
};

userSchema.methods.getNoteBooks = function(cb) {

}; 

userSchema.statics.hash = function(password) {
	return crypto.createHash('sha1').update(password).digest('base64');  
}; 

module.exports = User;