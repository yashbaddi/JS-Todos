CREATE DATABASE tododb; --creates a database named tododb

CREATE TABLE  todos(
    _id SERIAL PRIMARY KEY,
    list_id NOT NULL,
    checked BOOLEAN,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    priority VARCHAR(100),
    description VARCHAR(100));      --creates a table with specified columns



CREATE TABLE LISTS(
    _id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    );