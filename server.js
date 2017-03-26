let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const path = require('path');

// Use body-parser
app.use(bodyParser.json());

// Routers
let APIRouter = require(__dirname + '/app/routers/APIRouter.js');
let MainRouter = require(path.join(__dirname, '/app/routers/MainRouter.js'));

// Public files directory
app.use(express.static('public'));

// Template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/app/views'));

// Route API calls to appropriate routers
app.use('/api/v1', APIRouter);
app.use('/', MainRouter);

app.listen(3000, function() {
	console.log('Listening to port 3000. ')
});