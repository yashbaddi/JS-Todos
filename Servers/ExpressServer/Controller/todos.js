import {
  readTodoDB,
  insertTodoDB,
  updateTodoDB,
  deleteTodoDB,
} from "../Model/MongoDB-Model/todos.js";

export function readTodoAll(req, res) {
  if (req.query.pending) {
    readTodoDB({ pending: true }).then((value) => {
      res.json(value);
    });
  } else if (req.query.completed) {
    readTodoDB({ completed: true }).then((value) => {
      res.json(value);
    });
  } else {
    readTodoDB().then((value) => {
      res.json(value);
    });
  }
}

export function readTodo(req, res) {
  readTodoDB({ id: req.params.id }).then((value) => {
    res.json(value);
  });
}

export function insertTodo(req, res) {
  insertTodoDB(req.body).then((id) => {
    res.send({ _id: id });
  });
}

export function updateTodo(req, res) {
  updateTodoDB(req.body).then((data) => {
    res.send(data);
  });
}

export function deleteTodo(req, res) {
  deleteTodoDB({ id: req.params.id });
}

export function deleteTodoAll(req, res) {
  if (req.query.pending) {
    deleteTodoDB({ pending: true });
  } else if (req.query.completed) {
    deleteTodoDB({ completed: true });
  } else {
    deleteTodoDB();
  }
}
