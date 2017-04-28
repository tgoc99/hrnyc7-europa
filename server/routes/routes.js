module.exports = function(app, express) {

	//query params : ?:username = ''&token=''
	app.get('/api/users', function(req, res, next) {

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

	//query params : ?companyname
	app.get('/api/news', function(req, res, next) {

		next();
	});

	//query params : ?companyname
	app.get('/api/company', function(req, res, next) {

		next();
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