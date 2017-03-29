const mongoose = require('mongoose'); 

var db = {}; 

// TODO: Pull mongoDB URI from config
let mongoURI = 'mongodb://localhost/vocapin'; 

db.init = function() {
	// Create the database connection
	mongoose.connect(mongoURI); 
}

module.exports = db; 