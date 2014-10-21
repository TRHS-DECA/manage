var mongoose = require('mongoose');

var Shift = mongoose.model('shift', {
	manager_id: Number,
    	students: [{
		name: String,
    		id: Number
	}]
});
