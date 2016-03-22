router = require('express').Router();

exports.module = function(dbConnection) {
	//Using restful, responsible for to insert element of Mongodb
	router.put('/Hashtag/',function (reg, res){
		console.log(res.body);
		dbConnection.Hashtag.insert(reg.body,function(err,docs){
			res.json(docs);
		});
	});
	//Using restful, responsible for to remove element of Mongodb
	router.delete('/Hashtag/:id', function (req, res) {
		var id = req.params.id;
		console.log(id);
		db.Hashtag.remove({_id: mongojs.ObjectId(id)}, function (err, docs) {
			res.json(docs);
		});
	});
	//Using restful, responsible for to list element of Mongodb
	router.get('/Hashtag/', function (req, res) {
		dbConnection.Hashtag.find(function (err, doc) {
			res.json(doc);
		});
	});

	 return router;
}