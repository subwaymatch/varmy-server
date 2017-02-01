let express = require('express')
let router = express.Router

router.get('/v1/list', function(req, res) {
	res.json({
		list: [
			{
				vocab1: "Vocab1",
				vocab2: "Vocab2"
			},
			{
			}
		]
	})
})

module.exports = router