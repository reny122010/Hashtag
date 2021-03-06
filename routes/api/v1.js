router = require('express').Router();
var models =  require('../../models/v1.js');

function retornarErroAoUsuario(req, res, error) {
	res.statusCode(500);
	res.json({ error: error });
}

exports.module = function(dbConnection) {
	//Using restful, get parameter and call of models for operate.
	router.post('/hashtag/', function (req, res) {
		hashtagModel.createHashtag(
			{
			hashtag: reg.body.hashtag,
			author: reg.body.author,
			mediaLink: reg.body.mediaLink,
			date: new Date.now()
			},
			function (error, id){
				if (error) return retornarErroAoUsuario(req, res, error);
				res.json({ id: id });
		});
	});
	//Using restful, get parameter and call of models for operate.
	router.delete('/hashtag/:id', function (req, res) {
		hashtagModel.deleteHashtag({ id: req.params.id }, function (err, data) {
			if (error) return retornarErroAoUsuario(req, res, error);
			res.json({ ok: 1 });
		});
	});
	//Using restful, get parameter and call of models for operate.
	router.get('/hashtag/', function (req, res) {
		hashtagModel.findHashtagsByDate({ date: req.body.data,
										  amount : req.body.amount },
		function (err, data) {
			if (error) return retornarErroAoUsuario(req, res, error);
			res.json(data);
		});
	});

	return router;
}