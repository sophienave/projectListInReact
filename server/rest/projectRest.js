var projectService = require('./../service/projectService');

module.exports = function (server) {
    server.get('/project', function (req, res) {
        var project = projectService.getProject();

        res.status(201).json(project);
    });
};