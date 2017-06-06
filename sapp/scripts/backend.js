function setCookie(key, value) {
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

(function() {

	var nobackend = false;

	if (!nobackend)
		return;

	angular.module('mlg').config([ '$provide', function($provide) {

		console.log('----------------------inside config-----------------------');
		$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

	} ]).run([ '$httpBackend', 'urlParams', function($httpBackend, urlParams) {
		setCookie('userObj', '"userName=Abhishek Kumar,email=abhishek@apparrant.com,role=admin"');
		console.log('--------------------------------inside run----------');
		var i = 0;

		function randomDate(start, end) {
			return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).format("YYYY-MM-DD HH:mm:ss:SSS");
		}
		$httpBackend.whenGET(/.*/).passThrough();
		$httpBackend.whenJSONP(/.*/).passThrough();

	} ]);
})(angular);
/**
 * 
 */
