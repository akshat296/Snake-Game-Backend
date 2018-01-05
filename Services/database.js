var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'login',
  multipleStatements: true
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
let getAllUsers =  function(){
	return new Promise((success,reject)=>{
		connection.query("SELECT * FROM users",(err,data)=>{
			if(err){
				reject(err)}
			success(data)
			
		})
	}) 
};



module.exports = {getAllUsers};