USE DATABASE employee_tracker_db;


INSERT INTO department (department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Engineering');
INSERT INTO department (department_name) VALUES ('Finance');
INSERT INTO department (department_name) VALUES ('Legal');


INSERT INTO role (id, title, salary, department_id) VALUES (401, 'Salesperson', '30000', 1);
INSERT INTO role (id, title, salary, department_id) VALUES (402, 'Sales Lead', '5000', 1);
INSERT INTO role (id, title, salary, department_id) VALUES (435, 'Software Engineer', '80000', 2);
INSERT INTO role (id, title, salary, department_id) VALUES (466, 'Accountant', '85000', 3);
INSERT INTO role (id, title, salary, department_id) VALUES (485, 'Lawyer', '120000', 4);



INSERT INTO employee (first_name, last_name, role_id) VALUES ('Hanna', 'Smith', '004');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Shane', 'Smith', '005');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Lucy', 'Peitricola', '001');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Jan', 'Ainsworth', '004');
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Scott', 'Evans', '002');


