var mysql = require("mysql");




var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Queen1tj",
  database: "employee_tracker_db"
});



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



module.exports = connection;







// var express = require("express");
// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// var app = express();

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Queen1tj",
//   database: "wishes_db"
// });

// app.listen()