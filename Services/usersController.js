let database = require('./database');

let showUsers =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.getAllUsers();
		console.log("sat",result);
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}
let createUser =  async function(req,res){
	res.header("Content-type","Application/json")
	console.log("te");
	try{	
		//console.log("tesst",req.params('name'));
		console.log("tesst email param",req.param('email'));
		let result = await database.createUser(req.param('name'),
			req.param('email'),
			req.param('username'),
			req.param('password'));
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}
let checkUser =  async function(req,res){
	res.header("Content-type","Application/json")
	//console.log("te",req.param('email_or_username'));
	try{	
		let result = await database.checkUser(req.param('email_or_username'),
			req.param('password'),
			);
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}

module.exports = {showUsers,createUser,checkUser};