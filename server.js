const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config();

const connect = require('./db_connect');
connect();

app.use("/user", require("./routes/user"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>{
	err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});