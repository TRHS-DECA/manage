var mongoose = require('mongoose');

var Item = mongoose.model('item', {
	name: String,
    	cost: Number,
    	sold: Number,
    	available: Number
});
