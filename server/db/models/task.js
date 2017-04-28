var db = require('../db-config.js');
var mongoose = require('mongoose');

var Task = mongoose.model('Task', { 
	name: {
		type: String,
		required: [true, 'Task needs a name field']
	},
	dueDate: {
		type: Date,
		default: +new Date() + 7*24*60*60*1000
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = Task;