import express from "express";
import bodyParser from "body-parser";
import {
  deleteTodo,
  deleteTodoAll,
  insertTodo,
  readTodo,
  readTodoAll,
  updateTodo,
} from "../Controller/todos.js";

const router = express.Router();

router
  .route("/")
  .get(readTodoAll)
  .post(bodyParser.json(), insertTodo)
  .delete(deleteTodoAll);

router
  .route("/:id")
  .get(readTodo)
  .put(bodyParser.json(), updateTodo)
  .delete(deleteTodo);

export default router;
