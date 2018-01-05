let database = require('./database');

let showUsers =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.getAllUsers();
		console.log("sat",result);
		if(result){
			res.json({
				status:"OK",
				files:result
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
		//console.log("tesst",req.params('name'));
		//console.log("tesst param",req.param('name'));
		let result = await database.createUser(req.params.name,req.params.email,req.params.username,req.params.password);
		if(result){
			res.json({
				status:"OK",
				files:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}

module.exports = {showUsers,createUser};