var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Customer = new Schema({
	'CustomerId' : { 'type': 'String', 'index' : {'unique' : true} },
	'ContactNumber': 'String',
	'Name': 'String',
	'DOB': 'String',
	'Address': 'String',
	'BPSystolic': 'String',
	'BPDiastolic': 'String',
	'Weight': 'String',
	'BPThreshold': 'String',
	'Preferred_Hospital': 'String',
	'Preferred_Pharmacy': 'String',
	'Preferred_Cab_Service': 'String',
	'Preferred_pickup_location': 'String',
	'Preferred_Doctor': 'String',
	'Friend_1': 'String',
	'Friend_2': 'String',
	'Last_Hospital_Visit': 'String'
	
});

var Customer = mongoose.model('Customer',Customer);
module.exports  = Customer;