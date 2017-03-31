var Notes = {}; 

const notebook = require('./../tests/vocab-data'); 

Notes.renderUserNotes = function(req, res) {
	res.render('user/notes', {
		user: req.user
	});
};

Notes.renderNoteBook = function(req, res) {
	res.render('notebook/notebook', {
		user: req.user, 
		notebook: notebook
	});
}; 

module.exports = Notes; 