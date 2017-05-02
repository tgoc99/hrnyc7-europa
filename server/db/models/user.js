var db = require('../db-config.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Job = require('./job.js');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
	username: {
		type: String,
		// required: [true, 'User needs a unique name field'],
		// unique: true
	},
	password: {
		type: String,
		// required: [true, 'User needs a password field']
	},
	profilePic: {
		type: String,
		default: 'http://www.swaconhospital.com/wp-content/uploads/2016/12/3244.png'
	},
	jobs: [Job.schema]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;