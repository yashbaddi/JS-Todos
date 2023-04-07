import {
  createCheckboxElem,
  viewText,
  viewDate,
  createButtonElem,
} from "./abstractedElements.js";
import { currentTodo } from "./index.js";
import todoForm from "./todoForm.js";

export default function renderTodo(data) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  const title = viewText("todo__title", data.title);
  const date = viewDate("todo__date", data.date);
  const edit = createButtonElem("todo__edit", "Edit");
  const checkbox = createCheckboxElem(
    "todo__checkbox",
    () => {
      todoElement.classList.toggle("todo__completed");
      console.log(currentTodo);
      console.log("before", data);
      data.check = !data.check;
      console.log("after", data);
      console.log(currentTodo);
      localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
    },
    data.check
  );

  todoElement.append(checkbox, title, date, edit);
  const todoFormEdit = todoForm(data);
  todoFormEdit.style.display = "none";

  edit.addEventListener("click", (event) => {
    if (todoFormEdit.style.display == "none") {
      todoFormEdit.style.display = "";
    } else {
      todoFormEdit.style.display = "none";
    }
  });

  todoElement.append(todoFormEdit);
  return todoElement;
}
