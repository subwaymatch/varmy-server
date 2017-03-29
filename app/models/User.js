const mongoose = require('mongoose');
const passport = require('passport');
const Schema = mongoose.Schema; 

var userSchema = new Schema({
	email: String,
	password: String
}); 

var User = mongoose.model('User', userSchema); 

userSchema.methods.getNoteBooks = function(cb) {

}; 

userSchema.statics.hash = function(password) {
	return crypto.createHash('sha1').update(password).digest('base64');  
}; 

var newUser = new User({
	email: 'test@a.com',
	password: 'eitkeirit'
});

newUser.save(function(err) {
	if (err) console.log(err);
	else console.log('newUser');
});

module.exports = User;