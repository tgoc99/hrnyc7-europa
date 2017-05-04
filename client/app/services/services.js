angular.module('app.services', [])

.factory('Company', function($http) {
	return {
		getInfo: function(companyUrl) {
			return $http({
				method: 'GET',
				url: '/api/companyInfo?',
				params: {
					domain: companyUrl
				}
			})
			.then(function(res) {
				return res;
			})
			.catch(function(err) {
				console.log(err)
			})
		},
		getNews: function(companyName) {

			return $http({
				method: 'GET', 
				url: '/api/news?',
				params: {
					company: companyName
				}
			})
			.then(function(res) {
				return res;
			})
			.catch(function(err) {
				console.log(err);
			})
		}
	}
})

.factory('User', function($http) {
	return {
		getAllData: function() {
			return $http({
				method: 'GET',
				url: 'api/users',
			})
			.then(function(res) {
				return res
			})
			.catch(function(err) {
				console.log(err)
			})
		},
		changeData: function(data) {

			return $http({
				method: 'PATCH',
				url: 'api/users',
				data: data
			})
			.then(function(res) {
				return res;
			})
			.catch(function(err) {
				console.log(err)
			})
		}
	}
})

.factory('Jobs', function($http) {
	return {
		update: function() {
			
		}
	}
})