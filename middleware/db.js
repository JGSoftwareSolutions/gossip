/*requiring mysql node modules */
var mysql = require("mysql");

var method = db.prototype;

function db() {
	/*
		creating MySql database connection 
	*/
	var con = mysql.createPool({
		host : 'db4free.net',
	  	user : 'gossipuser1',
	  	password : 'mytesting321',
	  	database : 'gossipdb'
	});
	this.connection=con;
}
method.getcon = function() {
	return this;
};

module.exports = db;
