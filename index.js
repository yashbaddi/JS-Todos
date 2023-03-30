const pendingList = document.querySelector(".card__pending");
const completedList = document.querySelector(".card__completed");

function addTodo(todoText, todoDate, todoPriority) {
  const todoElement = document.createElement("div");
  const todoCheckbox = document.createElement("input");
  const todoDate = document.createElement("input");
  const todoPriority = document.createElement("input");
  todoElement.classList.add("todo");
  todoCheckbox.classList.add("todo__checkbox");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.addEventListener("change", (event) => {});
}
