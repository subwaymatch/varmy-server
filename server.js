let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// Use body-parser
app.use(bodyParser.json())

// Routers
let APIRouter = require(__dirname + '/routers/APIRouter.js')
let MainRouter = require(__dirname + '/routers/MainRouter.js')

// Public files directory
app.use(express.static('public'))

// Template engine
app.set('view engine', 'pug')

// Route API calls to appropriate routers
app.use('/api/v1', APIRouter)
app.use('/', MainRouter)

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.listen(3000, function() {
	console.log('Listening to port 3000. ')
})