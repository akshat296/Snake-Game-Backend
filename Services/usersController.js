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
	
	try{	
		
		let result = await database.createUser(req.query['name'],
			req.query['email'],
			req.query['username'],
			req.query['password'])
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
		let result = await database.checkUser(req.query['email_or_username'],
			req.query['password'],
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