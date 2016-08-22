module.exports = function (server) {
    server.get('/project', function (req, res) {
        var project = {
        	id: 1,
        	name: "Test1",
        	status: "In Progress"
        };

        res.status(201).json(project);
    });
};