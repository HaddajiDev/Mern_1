const mongoose = require("mongoose");

const URI = process.env.URI;

const connect = async() => {
	try {
		const result = await mongoose.connect(URI, {
			dbName:'MERN_1'
		});
		console.log("Connected");
	} catch (error) {
		console.log(error);
	}
}

module.exports = connect;