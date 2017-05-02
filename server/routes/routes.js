var db = require('../db/db-config.js');
var mongoose = require('mongoose');
var passport = require('passport');

// import mongoose models
var User = require('../db/models/user.js');
var Task = require('../db/models/task.js');
var Step = require('../db/models/step.js');
var Contact = require('../db/models/contact.js');
var Job = require('../db/models/job.js');

const rp = require('request-promise');
const config = require('../config/config.js');

module.exports = function(app, express) {

	app.get('/api/users', function(req, res) {
		console.log('session info get /api/users', req.session.passport.user);
		var username = req.session.passport.user;

		User.find({ username: username }).exec(function(err, user){
			if(user.length === 0) {
				console.log('unsuccessful retrieve user', username);
				res.status(400).send('null');
			} else {
				console.log('successful retrieve user', username, user);
				res.send(user[0]);
			}
		});
	});

	// in body: User object
	app.patch('/api/users', function(req, res) {
		var username = req.session.passport.user;
		var body = req.body;

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

	app.delete('/api/users', function(req, res) {
		var username = req.session.passport.user;

		User.remove({ username: username }).exec(function(err, user){
			if(err) {
				console.log('unsuccessful remove user', username);
				res.status(400).send('unsuccessful remove');
			} else {
				console.log('successful remove user', username);
				res.send('successful remove');
			}
		});
	});

	//query params : ?company=example
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

	//query params : ?domain=example.com
	app.get('/api/companyInfo', function(req, res) {

		let companyName = req.query.domain;

		let options = {
			uri: "https://api.fullcontact.com/v2/company/lookup.json?",
			qs: {
				domain: companyName
			},
			headers: {
				'X-FullContact-APIKey' : config.apiKeys.fullContact
			}
		};
		rp(options)
		.then(function(response) {
			res.status(200).json(response);
		})
		.catch(function(err) {
			res.status(400).send('Something\s wrong, please try again!')
		})
	});

	//in req.body: (username: password: )
	app.post('/api/register', function(req, res) {
		console.log('attempting to register', req.body.username, req.body.password);

	  User.register(new User({ username: req.body.username }),
	    req.body.password, function(err, account) {
	    if (err) {
	      return res.status(500).json({
	        err: err
	      });
	    }
	    passport.authenticate('local')(req, res, function () {
	      return res.status(200).json({
	        status: 'Registration successful!'
	      });
	    });
	  });
	});

	//in req.body: (username: password: )
	app.post('/api/login', function(req, res, next) {
	  passport.authenticate('local', function(err, user, info) {
	    if (err) {
	      return next(err);
	    }
	    if (!user) {
	      return res.status(401).json({
	        err: info
	      });
	    }
	    req.logIn(user, function(err) {
	      if (err) {
	        return res.status(500).json({
	          err: 'Could not log in user'
	        });
	      }
	      res.status(200).json({
	        status: 'Login successful!'
	      });
	    });
	  })(req, res, next);
	});

	// get /api/logout, respond {status: "Bye"}
	app.get('/api/logout', function(req, res) {
	  req.logout();
	  res.status(200).json({
	    status: 'Bye!'
	  });
	});

	// get /api/status respond {status: true/false}
	app.get('/api/status', function(req, res) {
	  if (!req.isAuthenticated()) {
	    return res.status(200).json({
	      status: false
	    });
	  }
	  res.status(200).json({
	    status: true
	  });
	});
};