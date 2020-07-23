
var orm = require("./config/orm.js");
var inquirer = require("inquirer");
const Employee = require("./config/employee.js");



let teamMembers = [];


TrackEmployees();

 function TrackEmployees() 
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
                    ]
                }
            ]).then (answer =>
                {
                     
                    switch(answer.operation) {
                        case "Add Employee":
                            console.log(answer);
                            AddEmployee();
                        break;
                    
                        case "View All Employees":
                            AllEmployees();
                        break;
                    
                        case "View Employees by Department":
                            EmployeesByDepartment();
                        break;
                    }
                })
  }

  function AddEmployee()
{
      inquirer.prompt( 
        [
            {
                type: "input",
                name: "firstName",
                message: "Employee's first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "Employee's last name?"
            },
            {
                type: "input",
                name: "roleId",
                message: "What is employee's position?"
            },
            {
                type: "input",
                name: "reportsTo",
                message: "Who is employee's Manager?"
            },
            
        ]
    ).then(function(answers){
        const employee = new Employee (answers.firstName, answers.lastName, answers.roleId, answers.reportsTo)
        console.log(employee)
        teamMembers.push(employee)
        TrackEmployees()
        Save(employee)
    })
}


function Save(employee){
    orm.NewEmployee("employee", employee);
    console.log(employee);
}

function AllEmployees(){
    orm.ViewEmployees("employee");
}

function EmployeesByDepartment(){
    orm.selectWhere("employee", "department_id", "");
}

