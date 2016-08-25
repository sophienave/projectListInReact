import React from 'react';
import ReactDOM from 'react-dom';
import RequestUtil from './requestUtil';


RequestUtil.get('/projects').then(function(projects){
	
	console.log("projects "+ projects);

	var projectsDOM = projects.map((project) => 
		<div key={project.id}>
			<span> {project.id} </span>
			<span> {project.name} </span>
			<span> {project.status} </span>
		</div> );
	ReactDOM.render(<div>{projectsDOM}</div>,document.getElementById('main'));
});


