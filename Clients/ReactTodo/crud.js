import {
  getAllTodosRequest,
  createTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from "./requests.js";

export async function getAllTodos(store) {
  const data = await getAllTodosRequest();
  console.log("Recived Data");
  store.update((store) => data.reverse());
  return data;
}

export async function createTodo(store, data) {
  const dataInsert = data;
  const id = await createTodoRequest(dataInsert);
  dataInsert._id = id;
  console.log("createTodo:", dataInsert);
  store.update((store) => [dataInsert, ...store]);
}

export async function updateTodo(store, data) {
  await updateTodoRequest(data);
  store.update((store) => {
    store.forEach((todo) => {
      if (todo.id == data._id) {
        todo = data;
      }
    });
    console.log("update str", store);
    return [...store];
  });
}

export async function deleteTodo(store, id) {
  await deleteTodoRequest(id);
  store.update((store) => {
    const filteredStore = store.filter((todo) => todo._id !== id);
    return [...filteredStore];
  });
}

// updateTodo(todos, {
//   checked: false,
//   date: "2023-06-27",
//   description: "cdcdvvvdvd",
//   id: 97,
//   priority: null,
//   title: "vdvfvdvd",
// });
