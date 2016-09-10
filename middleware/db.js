/*requiring mysql node modules */
var mysql = require("mysql");

var method = db.prototype;

function db() {
	/*
		creating MySql database connection 
	*/
	var con = mysql.createPool({
		host : 'sql6.freesqldatabase.com',
	  	user : 'sql6134309',
	  	password : 'MLmSaEXZut',
	  	database : 'sql6134309'
	});
	this.connection=con;
}
method.getcon = function() {
	return this;
};

module.exports = db;
