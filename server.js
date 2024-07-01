const express = require("express");
const app = express();

require('dotenv').config();

const connect = require('./db_connect');
connect();

const PORT = process.env.PORT;

app.listen(PORT, (err) =>{
	err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});