var projectService = require('./../service/projectService');

module.exports = function (server) {
    server.get('/project', function (req, res) {
        var project = projectService.getProject();

        res.status(201).json(project);
    });
    server.post('/project', function (req, res) {
    	console.log("req.body = "+req.body);
    	var project = req.body;
    	projectService.addProject(project);    	
        res.status(201).json(project);
    });

    server.get('/projects', function (req, res) {
        var projects = projectService.getProjects();

        res.status(201).json(projects);
    });

};