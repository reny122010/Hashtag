var express =  require('express');
var app  = express();
var mongojs = require('mongojs');

//Select bucket of mongoDB
var dbHashtag = mongojs('Hashtag', ['Hashtag']); 

//Administrator of version
var contactRouterFunction = require('./routes/hashModule/v1/module.js');
var contactRouterV1 = contactRouterFunction.module(dbHashtag);

app.use('/api/v1/', contactRouterV1);

//Open the connection port in nodejs , and report your parameters

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log("Hashtag app listening at http://%s:%s", host, port);
});