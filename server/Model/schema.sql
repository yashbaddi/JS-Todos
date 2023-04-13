CREATE DATABASE tododb; --creates a database named todo

CREATE TABLE  todo(
    todo_id SERIAL PRIMARY KEY,
    todo_title VARCHAR(100) NOT NULL,
    todo_date DATE NOT NULL,
    todo_prio INT,
    todo_desc VARCHAR(100)
);

