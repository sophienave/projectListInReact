import React from 'react';

class Project extends React.Component{

	render() {
		var project = this.props.project;	
		return(
			<tr>
				<td> {project.id} </td>
				<td> {project.name} </td>
				<td> {project.status} </td>
			</tr>
		);
	}
}

export default Project;