function ProjectService(){
	this.projects =[];
};

ProjectService.prototype.getProject = function(id){
	for(var i=0; i<this.projects.length; i++){
		if (this.projects[i].id == id) {
			return this.projects[i];
		}
	}
	
	return "No project found with id="+id;
};

ProjectService.prototype.addProject = function(project){
	this.projects.push(project);
};

ProjectService.prototype.getProjects = function(){
	return this.projects;
};

var projectService = new ProjectService();
module.exports = projectService;
