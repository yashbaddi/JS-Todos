const baseUrl = "http://127.0.0.1:3000";

export async function getAllTodosDB() {
  const path = "/";
  const data = await fetch(baseUrl + path, { mode: "cors", method: "GET" });
  return data.json();
}

export async function createTodoDB(
  checkValue,
  titleValue,
  dateValue,
  prioValue,
  descValue
) {
  const path = "/";
  const data = {
    checked: checkValue,
    title: titleValue,
    date: dateValue,
    prio: prioValue,
    descript: descValue,
  };
  const res = await fetch(baseUrl + path, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  const id = await res.json();
  console.log(id);
  return id;
}

export async function updateTodoDB(
  id,
  checkValue,
  titleValue,
  dateValue,
  prioValue,
  descValue
) {
  const path = "/?id=" + id;
  const data = {
    checked: checkValue,
    title: titleValue,
    date: dateValue,
    prio: prioValue,
    descript: descValue,
  };
  await fetch(baseUrl + path, {
    mode: "cors",
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteTodoDB(id) {
  const path = "/?id=" + id;
  await fetch(baseUrl + path, { mode: "cors", method: "DELETE" });
}
