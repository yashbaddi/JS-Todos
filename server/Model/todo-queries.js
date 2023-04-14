import pool from "./db-connection.js";

//Create Todo
export async function insertTodo(
  titleValue,
  dateValue,
  priorityValue,
  descriptionValue
) {
  await pool.query(
    "INSERT INTO todo(todo_title,todo_date,todo_prio,todo_desc) VALUES ($1,$2,$3,$4)",
    [titleValue, dateValue, priorityValue, descriptionValue]
  );
}

//Read Todo
export async function readTodo(id) {
  const res = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
  //   console.log(res.rows);
  return res.rows;
}

//Read All todo
export async function readTodoAll() {
  const res = await pool.query("SELECT * FROM todo");
  //   console.log(res.rows);
  return res.rows;
}

//Update Todo
export async function updateTodo(
  id,
  titleValue,
  dateValue,
  priorityValue,
  descriptionValue
) {
  await pool.query(
    "UPDATE todo SET todo_title=$2,todo_date=$3,todo_prio=$4,todo_desc=$5 WHERE todo_id=$1",
    [id, titleValue, dateValue, priorityValue, descriptionValue]
  );
}

//Delete Todo
export async function deleteTodo(id) {
  const res = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
  //   console.log(res);
  return res.rowCount > 0 ? 1 : 0;
}

//Test
// insertTodo(
//   "this is sparta",
//   "2023-06-23",
//   1,
//   "this is power of Mangekyo Sharingaan"
// );
// readTodo(""+"")
// updateTodo(
//   1,
//   "this is spar",
//   "2023-06-23",
//   1,
//   "this is power of Mangekyo Sharingaan"
// );
// console.log(deleteTodo(1));

// console.log(readTodoAll());
