var MainController = {}; 

MainController.renderMainPage = function(req, res) {
	res.render('index', {
		title: 'Vocapin'
	});
};

module.exports = MainController; 