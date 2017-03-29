var Notes = {}; 

Notes.renderUserNotes = function(req, res) {
	res.render('user/notes', {
		email: req.user.email
	});
};

module.exports = Notes; 