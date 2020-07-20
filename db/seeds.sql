USE DATABASE employee_tracker_db;


INSERT INTO department (department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Engineering');
INSERT INTO department (department_name) VALUES ('Finance');
INSERT INTO department (department_name) VALUES ('Legal');


INSERT INTO employee_role (title, salary, department_id) VALUES ('Salesperson', '30000', '1');
INSERT INTO employee_role (title, salary, department_id) VALUES ('Sales Lead', '5000', '1');
INSERT INTO employee_role (title, salary, department_id) VALUES ('Software Engineer', '80000', '2');
INSERT INTO employee_role (title, salary, department_id) VALUES ('Accountant', '85000', '3');
INSERT INTO employee_role (title, salary, department_id) VALUES ('Lawyer', '120000', '4');



INSERT INTO employee (first_name, last_name, role_id) VALUES ('Hanna', 'Smith', '004');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Shane', 'Smith', '005');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Lucy', 'Peitricola', '001');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jan', 'Ainsworth', '004');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Scott', 'Evans', '002');


