'use strict';

module.exports =  {

	// Remote model method to get a single Attendee with username
	getAttendee : function(username,cbk){
		Attendee.findOne({username : username}, function(err,result){
			if(err){
				cbk(err);
			}
			else{
				cbk(result);
			}
		})
	},
};
