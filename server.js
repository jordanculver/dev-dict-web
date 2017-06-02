// server.js - web server using express framework to 
// serve the static files for angular in dist directory

const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStategy can be used
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
})

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);
