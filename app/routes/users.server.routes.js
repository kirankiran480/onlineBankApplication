// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'users' controller
var users = require('../../app/controllers/users.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'users' base routes
	// Set up the 'userId' parameter middleware
	app.param('userId', users.userByID);
};
	app.route('/users')
	   .post(users.create)
	   .get(users.list);

