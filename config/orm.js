// importing connection.js
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// creating the methods
var orm = {
	// selecting all from database
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, [], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	//inserting new data to database
	insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
	},
	//updating data within database
	updateOne: function (id, cb) {
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";

		console.log(queryString);
		connection.query(queryString,[id], function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}


};

// exporting orm
module.exports = orm;