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

module.exports = showUsers;