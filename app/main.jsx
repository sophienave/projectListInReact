import React from 'react';
import ReactDOM from 'react-dom';



get('/projects').then(function(projects){
	
	console.log("projects "+ projects);

	var projectsDOM = projects.map(function(project){
		return <div>{project.id}</div>;
	});
	ReactDOM.render(<div>{projectsDOM}</div>,document.getElementById('main'));
});

function get(url){
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


