import express from "express";
import bodyParser from "body-parser";
import {
  deleteTodo,
  deleteTodoAll,
  insertTodo,
  readTodo,
  readTodoAll,
  updateTodo,
  insertTodoList,
  readTodoList,
  updateTodoList,
  deleteTodoList,
} from "../Controller/todos.js";

const router = express.Router();

router
  .route("/")
  .get(readTodoAll)
  .post(bodyParser.json(), insertTodoList)
  .delete(deleteTodoAll);

router
  .route("/:list")
  .get(readTodoList)
  .post(bodyParser.json(), insertTodo)
  .put(bodyParser.json(), updateTodoList)
  .delete(deleteTodoList);

router
  .route("/:list/:id")
  .get(readTodo)
  .put(bodyParser.json(), updateTodo)
  .delete(deleteTodo);

export default router;
