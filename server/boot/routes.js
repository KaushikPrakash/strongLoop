module.exports = function(app) {
  var router = app.loopback.Router();

// Custom Routing 

  router.post('/sample', function(req, res) {
  	//Accessing the models
  	models.Attendee.Attendee.getAttendee(req.body.username,function(result){
  		res.send('Routing works',result);
  	})
    
  });


  app.use(router);
}