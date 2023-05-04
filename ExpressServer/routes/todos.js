import express from "express";
import bodyParser from "body-parser";
import {
  deleteTodo,
  deleteTodoAll,
  deleteTodoCompleted,
  deleteTodoPending,
  insertTodo,
  readTodo,
  readTodoAll,
  readTodoCompleted,
  readTodoPending,
  updateTodo,
} from "../Controller/todos.js";
const router = express.Router();

router
  .route("/")
  .get(readTodoAll)
  .post(bodyParser.json(), insertTodo)
  .delete(deleteTodoAll);

router.route("/pending").get(readTodoPending).delete(deleteTodoPending);
router.route("/completed").get(readTodoCompleted).delete(deleteTodoCompleted);

router
  .route("/:id")
  .get(readTodo)
  .put(bodyParser.json(), updateTodo)
  .delete(deleteTodo);
export default router;
