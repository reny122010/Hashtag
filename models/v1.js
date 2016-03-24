/*
 * Hashtag Model
 */
 
var express =  require('express');

function HashtagModel (mongoConnection) {
	this.collection = mongoConnection.Hashtag;
}

HashtagModel.prototype = {
	constructor: HashtagModel,

	// Responsible of to make parsing of data and insert elements in Mongodb
	createHashtag: function (args, done) {
		if (!args.hashtag || !args.hashtag.match(/^#(.*)/))
			return done(new Error("Argumento 'hashtag' inexistente/invalido"));
		if (!args.author || typeof author !== 'string')
			return done(new Error("Argumento 'author' inexistente/invalido"));
		if (!args.mediaLink || !args.mediaLink.match(/^https?:\/\//))
			return done(new Error("Argumento 'mediaLink' inexistente/invalido"));

		this.collection.insert({
			hashtag: args.hashtag,
			author: args.author,
			comment: args.comment,
			mediaLink: args.mediaLink,
			date: args.date,
		}, function (err, data) {
			if (err) return done(err);
			return done(null, data._id);
		});
	},
	// Responsible of to make parsing of data and delete elements in Mongodb
	deleteHashtag: function (args, done) {
		if (!args.id)
			return done(new Error("Argumento 'ID' inexistente"));

		this.collection.remove({ id: args.id }, function (err, data) {
			if (err) return done(err, null);

			done(null, data);
		});
	},
	// Responsible of to make parsing of data and list some elements in Mongodb
	findHashtagsByDateHashtag: function (args, done) {
		if (!args.date)
			return done(new Error("Argumento 'ID' inexistente"));
		if (!args.amount)
			return done(new Error("Argumento 'ID' inexistente"));

		this.collection.find.limit(args.amount).sort( {date: args.date}, function (err, data) {
			if (err) return done(err, null);
			done(null, data);
		});
	}
}
module.exports = {
	HashtagModel: HashtagModel
};