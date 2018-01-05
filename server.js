const express = require('express')
const multer = require('multer')

let controller = require('./Services/usersController');

const PORT = process.env.PORT || 9016
const app = express()


app.use("/",(req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	next();
})

app.use("/",controller)
app.listen(PORT,(err)=>{
	if(err)
		console.log(err)
	console.log(`app is listening on port ${PORT}`)
})

