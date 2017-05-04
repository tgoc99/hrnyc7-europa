var db = require('../db-config.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Job = require('./job.js');
var Task = require('./task.js');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
	username: {
		type: String,
	},
	profilePic: {
		type: String,
		default: 'http://www.swaconhospital.com/wp-content/uploads/2016/12/3244.png'
	},
	email: {
		type: String,
		default: 'Please update the email...'
	},
	tasks: [Task.schema],
	jobs: [Job.schema]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;