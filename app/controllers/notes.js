const NoteBook = require('./../models/NoteBook');

let Notes = {};

Notes.renderUserNotes = function(req, res) {
	res.render('user/notes', {
		user: req.user
	});
};

Notes.renderNoteBook = function(req, res) {
	NoteBook.getById(3, function(notebook) {
		res.render('notebook/notebook', {
			user: req.user,
			notebook: notebook
		});
	});
}; 

module.exports = Notes; 