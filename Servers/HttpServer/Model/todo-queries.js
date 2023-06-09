import pool from "./db-connection.js";
//Create Todo
export async function insertTodo(
  checkValue = false,
  titleValue,
  dateValue,
  priorityValue,
  descriptionValue
) {
  const idVal = await pool.query(
    "INSERT INTO todos(checked,title,date,priority,description) VALUES ($1,$2,$3::DATE,$4,$5) RETURNING id",
    [checkValue, titleValue, dateValue, priorityValue, descriptionValue]
  );
  console.log("Returning ID", idVal.rows[0].id);
  return idVal.rows[0].id;
}

//Read Todo
export async function readTodo(id) {
  const res = await pool.query("SELECT * FROM todos WHERE id=$1", [id]);
  //   console.log(res.rows);
  return res.rows;
}

//Read All todo
export async function readTodoAll() {
  const res = await pool.query("SELECT * FROM todos");
  //   console.log(res.rows);
  res.rows.forEach((elem) => {
    elem.date = elem.date.toISOString().split("T")[0];
  });
  return res.rows;
}

export async function readTodoPending() {
  const res = await pool.query("SELECT * FROM todos WHERE checked IS NOT TRUE");
  //   console.log(res.rows);
  return res.rows;
}

export async function readTodoCompleted() {
  const res = await pool.query("SELECT * FROM todos WHERE checked IS TRUE");
  //   console.log(res.rows);
  return res.rows;
}

//Update Todo
export async function updateTodo(
  id,
  checkValue = false,
  titleValue,
  dateValue,
  priorityValue,
  descriptionValue
) {
  console.log("id=", id, "check=", checkValue, "title=", titleValue);
  await pool.query(
    "UPDATE todos SET checked=$2,title=$3,date=$4,priority=$5,description=$6 WHERE id=$1",
    [id, checkValue, titleValue, dateValue, priorityValue, descriptionValue]
  );
}

//Delete Todo
export async function deleteTodo(id) {
  const res = await pool.query("DELETE FROM todos WHERE id=$1", [id]);
  //   console.log(res);
  return res.rowCount > 0 ? 1 : 0;
}

export async function deleteTodoCompleted() {
  await pool.query("DELETE FROM todos WHERE checked IS TRUE", [id]);
}

export async function deleteTodoAll() {
  await pool.query("DELETE FROM todos");
}

//Test
// insertTodo(
//   "this is sparta",
//   "2023-06-23",
//   1,
//   "this is power of Mangekyo Sharingaan"
// );
// readTodo(""+"")
// updateTodo(40, true, "qwejy", "2023-04-18T18:30:00.000Z", "Medium", "adfdgg");
// console.log(deleteTodo(1));

// console.log(readTodoAll());

// export async function toggleTodoCheckbox(id) {
//   const res = await pool.query(
//     "UPDATE todos SET checked=!checked WHERE id=$1",
//     [id]
//   );
// }

// console.log()
