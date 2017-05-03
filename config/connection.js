var mysql = require("mysql");

// connecting to the mysql database
var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "root",
    database: "burgers_db"
});
// making the connection to my sql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// exporting the connection for use in the ORM
module.exports = connection;