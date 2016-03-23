router = require('express').Router();

exports.module = function(dbConnection) {
	//Using restful, responsible for to insert element of Mongodb
	router.put('/Hashtag/',function (reg, res){
		console.log(res.body);
		dbConnection.Hashtag.insert(reg.body,function(err,docs){
			if(err != null){
				res.json(docs);
				console.log ("INFO: Successfully inserted!");
			}else{
				console.log ("INFO: Fail, not inserted!");
			}
		});
	});
	//Using restful, responsible for to remove element of Mongodb
	router.delete('/Hashtag/:id', function (req, res) {
		var id = req.params.id;
		console.log(id);
		db.Hashtag.remove({_id: mongojs.ObjectId(id)}, function (err, docs) {
			if(err != null){
				res.json(docs);
				console.log ("INFO: Element removed!");
			}else{
				console.log ("INFO: Element not removed!");
			}
		});
	});
	//Using restful, responsible for to list element of Mongodb
	router.get('/Hashtag/', function (req, res) {
		dbConnection.Hashtag.find(function (err, docs) {
			if(err != null){
				res.json(docs);
				console.log ("INFO: Successfully listed!");
			}else{
				console.log ("INFO: Fail, not listed!");
			}
		});
	});

	 return router;
}