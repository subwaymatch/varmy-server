var Notes = {}; 

Notes.renderUserNotes = function(req, res) {
	res.render('user/notes', {
		user: req.user
	});
};

module.exports = Notes; 