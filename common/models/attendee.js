'use strict';

module.exports = function(Attendee) {
	Attendee.findByName = function(username,cbk){
		Attendee.findOne({FirstName:username},function(err,res){
			cbk(res)
		})
	}
	
	Attendee.findByName();
	Attendee.remoteMethod('findByName')
};
