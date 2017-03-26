let NoteBook = {};

NoteBook.getById = function(id) {
	// Return a notebook by id
};

NoteBook.getByUser = function(user) {
	// Return all notebooks by id
};

NoteBook.getAll = function() {
	// Return all notebooks available by Vocapin
};

NoteBook.create = function(notebook, callback) {
	// db.create(newBook, function(newBook) { callback(newBook); });
};

NoteBook.delete = function(id) {
	// Delete a notebook by id
};

NoteBook.markKnown = function(id, index) {

};

module.exports = NoteBook;