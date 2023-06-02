import {
  getAllTodosRequest,
  createTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from "./requests";

export async function getAllTodos(store) {
  const data = await getAllTodosRequest();
  console.log("Recived Data");
  store.update((store) => data);
  return data;
}

export async function createTodo(store, data) {
  const id = await createTodoRequest(data);
  data.id = id;
  store.update((store) => [...store, data]);
}

export async function updateTodo(store, data) {
  await updateTodoRequest(data);
  store.update((store) => {
    store.forEach((todo) => {
      if (todo.id == data.id) {
        todo = data;
      }
    });
    return store;
  });
}

export async function deleteTodo(store, id) {
  await deleteTodoRequest(id);
  store.update((store) => {
    return store.filter((todo) => todo.id == id);
  });
}
