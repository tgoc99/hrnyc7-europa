const rp = require('request-promise');
const config = require('../config/config.js');

module.exports = function(app, express) {

	//query params : ?:username = ''&token=''
	app.get('/api/users', function(req, res, next) {
		console.log('api/users route')
		next();
	});

	//query params : ?:username = ''&token=''
	//in body: (username: ''password: '')
	app.post('/api/users', function(req, res, next) {

		next();
	});

	//query params : ?:username = ''&token=''
	//body: (fields: )
	app.patch('/api/users', function(req, res, next) {

		next();
	});

	//query params : ?:username = ''&token=''
	app.delete('/api/users', function(req, res, next) {

		next();
	});

	//query params : ?company="example"
	app.get('/api/news', function(req, res) {
		let companyName = req.query.company;

		let options = {
			uri: "https://api.cognitive.microsoft.com/bing/v5.0/news/search?"
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
			res.status(200).send(stories.value);
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

