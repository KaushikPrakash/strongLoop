module.exports = function(app) {
  var router = app.loopback.Router();

// Custom Routing 
	// app.middleware('auth', loopback.token({
	// 	model: app.models.accessToken,
	// }));

	router.post('/sample', function(req, res) {
		//Accessing the models
		Model.Attendee.findByName(req.body.firstName,function(result){
			res.send('Routing works',result);
		})

	});


  app.use(router);
}