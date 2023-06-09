import { ObjectId } from "mongodb";
import db from "./db-connection.js";

const collection = db.collection("todos");

export async function readTodoDB(filters = {}) {
  if (filters.list) {
    if (filters.id) {
      return await collection
        .find({
          _id: new ObjectId(filters.list),
          "todos._id": new ObjectId(filters.id),
        })
        .todos.toArray();
    }
    if (filters.pending) {
      return await collection
        .find({ _id: new ObjectId(filters.list), "todos.checked": false })
        .toArray();
    }

    if (filters.completed) {
      return await collection
        .find({ _id: new ObjectId(filters.list), "todos.checked": false })
        .todos.toArray();
    }
    return await collection.find({ _id: new ObjectId(filters.list) }).toArray();
  }
  return await collection.find({}).toArray();
}

// Create Todo
export async function insertTodoDB(filters, data) {
  console.log("Insert Todo Data", data);
  const listID = filters.list;
  data.todo._id = new ObjectId();

  if (filters.list === undefined) {
    //Insert as list
    listID = (await collection.insertOne(data)).insertedId;
    return { list: listID, id: data.todo._id };
  }
  const todoID = await collection.updateOne(
    { _id: new ObjectId(filters.list) },
    {
      $push: {
        todos: data.todo,
      },
    }
  );

  return { list: listID, id: data.todo.id };
}

//Update Todo
export async function updateTodoDB(filters, data) {
  console.log("id=", new ObjectId(data._id), "title=", data.title);
  const id = data._id;
  delete data._id;
  // return await collection.updateOne({ _id: new ObjectId(id) }, { $set: "todo.":data.todo});
}

export async function deleteTodoDB(filters) {
  console.log(filters.id);
  if (filters.id) {
    return collection.deleteOne({ _id: new ObjectId(filters.id) });
  }
  if (filters.pending) {
    return await collection.deleteMany({ checked: false });
  }
  if (filters.completed) {
    return await collection.deleteMany({ checked: true });
  }

  return await collection.deleteMany({});
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

// insertTodoDB({
//   title: "Yash",
//   date: new Date(),
//   checked: false,
//   priority: "None",
//   description: "",
// }).then((id) => {
//   console.log("id", id);
// });
// readTodoDB().then((data) => {
//   console.log(data);
// });

// deleteTodoDB({ id: "647ec39d066653608330f934" });
// updateTodoDB({
//   _id: "647ed2358a40172b38bbbf23",
//   title: "Shubham",
//   checked: false,
//   Date: "22-03-1999",
//   priority: "Low",
//   description: "",
// });
