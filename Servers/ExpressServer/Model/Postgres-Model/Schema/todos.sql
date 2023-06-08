CREATE DATABASE tododb; --creates a database named tododb

CREATE TABLE  todos(
    _id SERIAL PRIMARY KEY,
    checked BOOLEAN,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    priority VARCHAR(100),
    description VARCHAR(100));      --creates a table with specified columns

CREATE TABLE users(
    username VARCHAR(100) PRIMARY KEY NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE SESSIONS(
    sessionid VARCHAR(100) PRIMARY KEY NOT NULL,
    username VARCHAR(100)  NOT NULL
);

CREATE TABLE TODO_LISTS(
    list_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    );