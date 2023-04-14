import {
  createCheckboxElem,
  viewText,
  viewDate,
  createButtonElem,
  editButttonDiv,
} from "./abstracted-elements.js";
import { currentTodo } from "./index.js";
import todoForm from "./todo-form.js";

export default function renderTodo(data) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  const todoFormEdit = todoForm(data);
  todoFormEdit.style.display = "none";

  const todoSub = todoSubContainer(data.title, data.date, todoFormEdit);

  const checkbox = createCheckboxElem(
    "todo__checkbox",
    () => {
      todoElement.classList.toggle();
      checkbox.checked
        ? todoSub.classList.add("todo__completed")
        : todoSub.classList.remove("todo__completed");
      data.check = !data.check;
      localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
    },
    data.check
  );

  todoElement.append(checkbox);

  todoElement.append(todoSub);

  const deletebutton = createButtonElem("todo__delete", "\u{1F6AB}");

  deletebutton.addEventListener("click", () => {
    todoElement.remove();
    const dataIndex = currentTodo.indexOf(data);
    currentTodo.splice(dataIndex, 1);
    localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
  });
  todoElement.append(deletebutton);
  todoElement.append(todoFormEdit);

  return todoElement;
}

function todoSubContainer(dataTitle, dataDate, dataForm) {
  const todoSubContainer = document.createElement("div");
  todoSubContainer.classList.add("todo__sub");
  const title = viewText("todo__title", dataTitle);
  const date = viewDate("todo__date", dataDate);
  const edit = editButttonDiv();

  todoSubContainer.append(title, date, edit);

  todoSubContainer.addEventListener("click", displayEventHandler(dataForm));
  edit.addEventListener("click", displayEventHandler(dataForm));
  return todoSubContainer;
}

function displayEventHandler(element) {
  return (event) => {
    if (element.style.display == "none") {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  };
}
