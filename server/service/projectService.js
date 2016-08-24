function ProjectService(){
	this.projects =[
  {
    "name": "sophie1",
    "id": "1",
    "status": "In Progress"
  },
  {
    "name": "sophie2",
    "id": "2",
    "status": "In Progress"
  },
  {
    "name": "sophie3",
    "id": "3",
    "status": "In Progress"
  },
  {
    "name": "sophie4",
    "id": "4",
    "status": "No Started"
  }
];
};

ProjectService.prototype.getProject = function(id){
	for(var i=0; i<this.projects.length; i++){
		var project = this.projects[i];
		if (project.id == id) {
			return project;
		}
	}
};

ProjectService.prototype.addProject = function(project){
	this.projects.push(project);
};

ProjectService.prototype.getProjects = function(){
	return this.projects;
};

var projectService = new ProjectService();
module.exports = projectService;
