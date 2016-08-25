	export function get(url) {
		var promise =  new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);

			request.onload = function() {
		  	if (request.status >= 200 && request.status < 400) {
			    var data = JSON.parse(request.responseText);
			    resolve(data);
			  } else {
			    reject();
			  }
			};

			request.onerror = function() {
			  reject();
			};

			request.send();
		});
		return promise;
	}

	export function post(url, payload) {
		var promise =  new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('POST', url, true);
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

			request.onload = function(payload) {
		  	if (request.status >= 200 && request.status < 400) {
			    resolve(payload);
			  } else {
			    reject();
			  }
			};
			request.onerror = function() {
			  reject();
			};

			request.send(payload);
		});
		return promise;
	}
