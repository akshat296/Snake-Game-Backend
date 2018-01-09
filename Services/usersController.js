let database = require('./database');

let showUsers =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.getAllUsers();
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
	try{	
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
	try{	
		let result = await database.checkUser(req.param('email_or_username'),
			req.param('password')
			);
			var newObj = Object.assign({}, ...result)
			console.log("database",newObj)
		if(result){
			res.json({
				status:"OK",
				result:Object.assign({}, ...result)
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