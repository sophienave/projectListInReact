function ProjectService(){
	this.projects =[];
};

ProjectService.prototype.getProject = function(){
	var project = {
        name: "shula",
        id: "302344",
        status: "Not started"
    };
	return project;
};

ProjectService.prototype.addProject = function(project){
	this.projects.push(project);
};

ProjectService.prototype.getProjects = function(){
	return this.projects;
};

var projectService = new ProjectService();
module.exports = projectService;
