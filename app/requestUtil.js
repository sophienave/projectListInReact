class  RequestUtil {
	static get(url) {
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

	static post(url, payload) {
		var promise =  new Promise(function(resolve, reject) {
			var request = new XMLHttpRequest();
			request.open('POST', url, true);
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

			request.send = function(payload) {
		  	if (request.status >= 200 && request.status < 400) {
			    resolve();
			  } else {
			    reject();
			  }
			};
			request.onerror = function() {
			  reject();
			};
		});
		return promise;
	}
}
export default RequestUtil;
