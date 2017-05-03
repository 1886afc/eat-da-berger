var orm = require("../config/orm.js");

var burger = {
	//all burgers
	selectAll: function (cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	//adding a burger
	insertOne: function (cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function (res) {
			cb(res);
			//test
			console.log("WTF!!!!!!!!!!!!!!!!!!!!!!!!!! " + res);
		});
	},
	//updating a burger after being devoured
	updateOne: function (id, cb) {
		orm.updateOne(id, function(res) {
			cb(res);
			//test
			console.log(res);
		});
	}
};

// exporting database func for controller
module.exports = burger;