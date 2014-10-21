var mongoose = require('mongoose');

var Manager = mongoose.model('manager', {
	name: String,
    	student_id: Number,
    	shifts: [],
    	sales: []
});

module.exports = Manager;
