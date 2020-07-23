

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	department_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT,
	PRIMARY KEY (id)
);