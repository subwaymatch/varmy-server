const mongoose = require('mongoose'); 

var db = {}; 

// TODO: Pull mongoDB URI from config
let mongoURI = 'mongodb://localhost/vocapin'; 

db.init = function() {
	mongoose.Promise = global.Promise; 

	// Create the database connection
	mongoose.connect(mongoURI); 
}

module.exports = db; 