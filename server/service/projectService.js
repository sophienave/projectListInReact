function ProjectService(){
	
};

ProjectService.prototype.getProject = function(){
	var project = {
        name: "shula",
        id: "302344",
        status: "Not started"
    };
	return project;
};

var projectService = new ProjectService();
module.exports = projectService;
