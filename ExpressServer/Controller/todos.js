import {
  readTodoAllDB,
  deleteTodoAllDB,
  readTodoDB,
  insertTodoDB,
  updateTodoDB,
  deleteTodoDB,
  readTodoPendingDB,
  deleteTodoPendingDB,
  readTodoCompletedDB,
  deleteTodoCompletedDB,
} from "../Model/todos.js";

export function readTodoAll(req, res) {
  readTodoAllDB().then((value) => {
    res.json(value);
  });
}

export function deleteTodoAll(req, res) {
  deleteTodoAllDB();
}

export function insertTodo(req, res) {
  console.log("Insert Todo Controller", req.body);

  insertTodoDB(req.body).then((idval) => {
    res.send(idval.toString());
  });
}

export function readTodo(req, res) {
  readTodoDB(req.params.id).then((value) => {
    res.json(value);
  });
}

export function updateTodo(req, res) {
  updateTodoDB(req.params.id, req.body);
}

export function deleteTodo(req, res) {
  deleteTodoDB(req.params.id);
}

export function readTodoPending(req, res) {
  readTodoPendingDB().then((value) => {
    res.json(value);
  });
}

export function deleteTodoPending(req, res) {
  deleteTodoPendingDB();
}

export function readTodoCompleted(req, res) {
  readTodoCompletedDB().then((value) => {
    res.json(value);
  });
}

export function deleteTodoCompleted(req, res) {
  deleteTodoCompletedDB();
}
