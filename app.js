var express = require('express');
var mongoose = require('mongoose');

var app = express();
var mongo_uri = require('./config/db') || process.env.MONGO_URI;
var port = process.env.PORT || 9090;

mongoose.connect(mongo_uri);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.set('view engine', 'jade');
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

app.listen(port);

module.exports = app;
