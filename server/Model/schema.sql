CREATE DATABASE tododb; --creates a database named tododb

CREATE TABLE  todos(
    id SERIAL PRIMARY KEY,
    checked BOOLEAN,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    prio VARCHAR(100),
    descript VARCHAR(100));      --creates a table with specified columns

