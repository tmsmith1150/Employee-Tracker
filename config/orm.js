var connection = require("./connection.js");


var orm = {
  NewEmployee: function(tableInput, valOfCol) {
    var queryString = "INSERT INTO ??";
    connection.query(queryString, [tableInput, valOfCol], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },

  ViewEmployees: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },

  EmployeesByDepartment: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.table(result);
    });
  },


};


module.exports = orm;