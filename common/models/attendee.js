'use strict';

module.exports = function(Attendee) {
	Attendee.findByName = function(username,cbk){
		Attendee.find({
		    where: {FirstName: {lt: username}},
		  
		}, function(err, res) {
			if(res){
				cbk(res)
			}
			else{
				cbk(err)
		   }

		});
	}
	
	Attendee.findByName();
	Attendee.remoteMethod('findByName')
};
