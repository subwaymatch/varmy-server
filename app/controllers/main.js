var MainController = {}; 

MainController.renderMainPage = function(req, res) {
	var noteList = [
		{
			title: 'TOEFL Essential 300', 
			price: '0'
		},
		{
			title: 'TOEFL  Advanced 1000', 
			price: '1.99'
		},
		{
			title: 'GRE Essential 300', 
			price: '0'
		},
		{
			title: 'GRE Advanced 1000', 
			price: '2.99'
		},
		{
			title: 'SAT Essential 300', 
			price: '0'
		},
		{
			title: 'SAT Advanced 1000', 
			price: '1.99'
		},
		
	];

	res.render('index', {
		title: 'Vocapin', 
		noteList: noteList, 
		user: req.user
	});
};

module.exports = MainController; 