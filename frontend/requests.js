const baseUrl = "http://127.0.0.1:3000";

export async function getAllTodosRequest() {
  const path = "/todos/";
  const data = await fetch(baseUrl + path, { method: "GET", mode: "cors" });
  return data.json();
}

export async function createTodoRequest(data) {
  const path = "/todos/";
  console.log(data);

  const res = await fetch(baseUrl + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const id = await res.json();
  console.log(id);
  return id;
}

export async function updateTodoRequest(data) {
  const path = "/todos/" + data.id;

  await fetch(baseUrl + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteTodoRequest(id) {
  const path = "/todos/" + id;
  await fetch(baseUrl + path, { method: "DELETE" });
}
