import pool from "./db-connection.js";

export async function readTodoDB(username, filters = {}) {
  console.log("DB Read Request");
  if (filters.id) {
    return (await pool.query("SELECT * FROM todos WHERE _id=$1", filters.id))
      .rows;
  }

  if (filters.pending) {
    return (
      await pool.query("SELECT * FROM todos WHERE WHERE checked IS NOT TRUE")
    ).rows;
  }

  if (filters.completed) {
    return (await pool.query("SELECT * FROM todos WHERE WHERE checked IS TRUE"))
      .rows;
  }

  return (await pool.query("SELECT * FROM todos")).rows;
}

//Create Todo
export async function insertTodoDB(username, data) {
  console.log("Insert Todo Data", data);
  const idVal = await pool.query(
    "INSERT INTO todos(checked,title,date,priority,description) VALUES ($1,$2,$3::DATE,$4,$5) RETURNING _id",
    [data.checked, data.title, data.date, data.priority, data.description]
  );
  console.log("Returning ID", idVal.rows[0]._id);
  return idVal.rows[0]._id;
}

//Update Todo
export async function updateTodoDB(username, data) {
  console.log("Update DB:", data);
  await pool.query(
    "UPDATE todos SET checked=$2,title=$3,date=$4,priority=$5,description=$6 WHERE _id=$1",
    [
      data._id,
      data.checked,
      data.title,
      data.date,
      data.priority,
      data.description,
    ]
  );
}

export async function deleteTodoDB(username, filters) {
  if (filters.id) {
    return await pool.query("DELETE FROM todos WHERE _id=$1", [filters.id]);
  }
  if (filters.pending) {
    return await pool.query(
      "DELETE FROM todos WHERE WHERE checked IS NOT TRUE"
    );
  }
  if (filters.completed) {
    return await pool.query("DELETE FROM todos WHERE WHERE checked IS TRUE");
  }

  return await pool.query("DELETE FROM todos");
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
