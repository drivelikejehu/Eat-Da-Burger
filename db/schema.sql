DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Bleu Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheese Butterburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Juicy Lucy Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Steamed Hams Hamburger', false);