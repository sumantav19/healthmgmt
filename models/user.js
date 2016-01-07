var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
	'name' : 'String',
	'userId' : { 'type': 'String', 'index' : {'unique' : true} }
});

var User = mongoose.model('User',User);
module.exports  = User;