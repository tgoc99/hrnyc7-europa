var db = require('../db-config.js');
var mongoose = require('mongoose');
var Contact = require('./contact.js');
var Step = require('./step.js');
var Task = require('./task.js');

var Job = mongoose.model('Job', { 
	company: {
		type: String,
		required: [true, 'Job needs a company field']
	},
	salary: {
		type: String,
		default: 'Please update the salary...'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	position: {
		type: String,
		required: [true, 'Job needs a position field']
	},
	contacts: [Contact.schema],
	link: {
		type: String,
		default: 'Please update the link...'
	},
	description: {
		type: String,
		default: 'Please update the description...'
	},
	imageUrl: {
		type: String,
		default: 'Please update the imageUrl...'
	},
	comments: [String],
	steps: [Step.schema],
	currentStep: {
		type: Number,
		default: 0
	},
	tasks: [Task.schema]
});

module.exports = Job;