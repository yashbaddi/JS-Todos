import {
  readTodoDB,
  insertTodoDB,
  updateTodoDB,
  deleteTodoDB,
} from "../Model/MongoDB-Model/todos.js";

export function readTodoAll(req, res) {
  readTodoDB().then((value) => {
    res.json(value);
  });
}

export function readTodoList(req, res) {
  if (req.query.pending) {
    readTodoDB({ list: req.params.list, pending: true }).then((value) => {
      res.json(value);
    });
  } else if (req.query.completed) {
    readTodoDB({ list: req.params.list, completed: true }).then((value) => {
      res.json(value);
    });
  } else {
    readTodoDB({ list: req.params.list }).then((value) => {
      res.json(value);
    });
  }
}

export function readTodo(req, res) {
  readTodoDB({ list: req.params.list, id: req.params.id }).then((value) => {
    res.json(value);
  });
}

export function insertTodoList(req, res) {
  insertTodoDB({}, req.body).then((listID) => {
    res.send({ _id: listID });
  });
}

export function insertTodo(req, res) {
  console.log("InsertTodo Req Body", req.body);
  insertTodoDB({ list: req.params.list }, req.body).then((todoId) => {
    res.send({ _id: todoId });
  });
}

export function updateTodoList(req, res) {
  updateTodoDB({ list: req.params.list }, req.body).then((data) => {
    res.send(data);
  });
}

export function updateTodo(req, res) {
  updateTodoDB(
    {
      list: req.params.list,
      id: req.params.id,
    },
    req.body
  ).then((data) => {
    res.send(data);
  });
}

export function deleteTodo(req, res) {
  deleteTodoDB({ list: req.params.list, id: req.params.id }).then((data) => {
    res.send(data);
  });
}

export function deleteTodoList() {
  deleteTodoDB({ list: req.params.list }).then((data) => {
    res.send(data);
  });
}

export function deleteTodoAll(req, res) {
  deleteTodoDB().then((data) => {
    res.send(data);
  });
}
