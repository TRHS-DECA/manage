var Manager = require('../models/manager');

module.exports = {
	get: function(req, res) {
		res.render('home');
	},
	post: function(req, res) {
		Manager.findOne({ student_id: req.body.id }, function(err, manager) {
	}
};
