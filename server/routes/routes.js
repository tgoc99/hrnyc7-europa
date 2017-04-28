var db = require('../db/db-config.js');
var mongoose = require('mongoose');

// import mongoose models
var User = require('../db/models/user.js');
var Task = require('../db/models/task.js');
var Step = require('../db/models/step.js');
var Contact = require('../db/models/contact.js');
var Job = require('../db/models/job.js');
const rp = require('request-promise');
const config = require('../config/config.js');

module.exports = function(app, express) {
	// -------------------- ?username=admin , for admin access ------------------
	//query params : ?:username = ''&token=''
	// e.g. GET /api/users?username=admin
	// e.g. GET /api/users?username=someExistingUserName&token=someValidToken
	app.get('/api/users', function(req, res) {
		var username = req.query.username;
		var token = req.query.token;

		if(username != 'admin' && token === undefined) {
			console.log('invalid get users', username, token);
			res.status(400).send('invalid username or token');
			return;
		}

		User.find({ name: username }).exec(function(err, user){
			if(user.length === 0) {
				console.log('unsuccessful retrieve user', username);
				res.status(400).send('null');
			} else {
				console.log('successful retrieve user', username, user);
				res.send(user[0]);
			}
		});
	});

	// query params : none
	// in body: (username: ''password: '')
	// respond with token
	app.post('/api/users', function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		if(username === undefined || password === undefined) {
			res.status(400).send('invalid username or password');
			return;
		}

		var newUser = new User({
			name: username,
			password: password
		});

		newUser.save(function (err, user) {
			console.log(err, user);

			if (err) {
				console.log('username already exists!', username, user);
				res.status(400).send(err);
			} else {
				console.log('saved', user);
				res.send(user);
			}
		});

	});

	//query params : ?:username = ''&token=''
	//body: (fields: User)
	app.patch('/api/users', function(req, res) {
		var username = req.query.username;
		var token = req.query.token;
		var body = req.body;

		if(username != 'admin' && token === undefined) {
			console.log('invalid get users', username, token);
			res.status(400).send('invalid username or token');
			return;
		}

		User.update({ _id: body._id }, body).exec(function(err, user){
			console.log('updating', err, user, 'with', username, body);
			if(err) {
				console.log('unsuccessful update user', username, body);
				res.status(400).send('unsuccessful update');
			} else {
				console.log('successful update user', username, user);
				res.send('successful update');
			}
		});
	});

	//query params : ?:username = ''&token=''
	app.delete('/api/users', function(req, res) {
		var username = req.query.username;
		var token = req.query.token;

		if(username != 'admin' && token === undefined) {
			console.log('invalid get users', username, token);
			res.status(400).send('invalid username or token');
			return;
		}

		User.remove({ name: username }).exec(function(err, user){
			if(err) {
				console.log('unsuccessful remove user', username);
				res.status(400).send('unsuccessful remove');
			} else {
				console.log('successful remove user', username);
				res.send('successful remove');
			}
		});
	});

	//query params : ?company="example"
	app.get('/api/news', function(req, res) {
		let companyName = req.query.company;

		let options = {
			uri: "https://api.cognitive.microsoft.com/bing/v5.0/news/search?",
			qs: {
				q: companyName,
				count: 10,
				offset: 0,
				mkt: 'en-us',
				safeSearch: 'Moderate'
			},
			headers: {
				'Ocp-Apim-Subscription-Key': config.apiKeys.bingSearch
			},
			json: true
		};
		rp(options)
		.then(function(stories) {
			res.status(200).send(stories);
		})
		.catch(function(err) {
			console.log('API call failed!');
		});
	});

	//query params : ?companyname
	app.get('/api/company', function(req, res, next) {

		
	});

	//query params :?username=''&password=''
	app.get('/api/auth', function(req, res, next) {

		next();
	});

	//in req.body: (username: password: )
	app.post('/api/auth', function(req, res, next) {

		next();
	});
};

