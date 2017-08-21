var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@scal900",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error: " + err.stack);
    return;
  }
  console.log("Connection ID: " + connection.threadId);
});

module.exports = connection;