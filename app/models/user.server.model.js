// Invoke 'strict' JavaScript mode
'use strict';

// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'UserSchema'
var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    city: String,
    profession: String,
    mobile: Number,
    pan: Number,
    income: Number,
    company: String,
    designation: String,
    address : String,
    pin : Number,
    fdCheck: Boolean,
    creditcardCheck: Boolean,
    accountType: String
});
/*age: Number,
	city: String,
	profession: String,
	mobile: Number,
	pan: Number,
	income: Number,
	company: String,
	designation: String,
	address : String,
	pin : Number,
	fdcheck: Boolean,
	creditcardCheck: Boolean,
	accountType: String
*/

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);