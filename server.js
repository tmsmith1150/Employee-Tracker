var orm = require("./config/orm.js");
var inquirer = require("inquirer");

let teamMembers = [];


trackEmployees();

 function trackEmployees() 
{
    
    
         inquirer.prompt( 
            [
                {
                    type: "list",
                    name: "operation",
                    message: "What would you like to do?",
                    choices: [
                    "View All Employees",
                    "View Employees by Department", 
                    "View All Employees by Manager", 
                    "Add Employee",
                    "Delete Employee",
                    "Update Employee"]
                }
            ]).then (answer =>
                {
                     
                    switch(answer.operation) {
                        case "View All Employees":
                            console.log(answer);
                            selectAllEmployees();
                        break;
                    
                        case "Engineer":
                            PromptEngineer();
                        break;
                    
                        case "Intern":
                            PromptIntern();
                        break;
                    }
                })
  }



