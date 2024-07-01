const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	email: String,
	username: String,
	password: String,
	isAdmin: Boolean,
});