import React from 'react';
import Project from  './project.jsx';

class ProjectsList extends React.Component {

	render() {	
		var projectItems = this.getProjectItems(this.props.projects);
		var projectListHeader = this.getTableHeader();
		return (
			<table>
				<thead>
					{projectListHeader}
				</thead>
				<tbody>
					{projectItems}
				</tbody>
			</table>
		);
		
	}

	getTableHeader(){
		return (
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Status</th>
				</tr>
			);
	}

	getProjectItems(projects) {
		var projectsItems = projects.map((project) => <Project key = {project.id} project = {project}/>);
		return projectsItems;
	}
}
export default ProjectsList;