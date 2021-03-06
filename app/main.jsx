import React from 'react';
import ReactDOM from 'react-dom';
import * as rest from './requestUtil' ;
import ProjectsList from './projectlist.jsx';

/*
rest.get('/projects').then(function(projects){
	
	console.log("projects "+ projects);

	var projectsDOM = projects.map((project) => 
		<div key = {project.id}>
			<span> {project.id} </span>
			<span> {project.name} </span>
			<span> {project.status} </span>
		</div> );
	ReactDOM.render(<div>{projectsDOM}</div>,document.getElementById('main'));
});
*/
rest.get('/projects').then(function(projects){
	ReactDOM.render(<ProjectsList projects = {projects}/>, document.getElementById('main'));
});

//Inside ProjectsList:
//projects.map((project) => <Project project/>);
