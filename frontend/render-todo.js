import {
  createCheckboxElem,
  viewText,
  viewDate,
  createButtonElem,
  editButttonDiv,
} from "./abstracted-elements.js";
import { currentTodo } from "./index.js";
import { deleteTodoDB, updateTodoDB } from "./requests.js";
import todoForm from "./todo-form.js";

export default function renderTodo(data) {
  console.log(data);
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  const todoFormEdit = todoForm(data);
  todoFormEdit.style.display = "none";
  console.log(data);

  const todoSub = todoSubContainer(data.title, data.date, todoFormEdit);
  // console.log("view", data.title, data.date);

  const checkbox = createCheckboxElem(
    "todo__checkbox",
    () => {
      todoElement.classList.toggle();
      checkbox.checked
        ? todoSub.classList.add("todo__completed")
        : todoSub.classList.remove("todo__completed");
      data.check = !data.check;
      console.log("Data Check", data.check);
      updateTodoDB(...Object.values(data));
      // localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
    },
    data.check
  );

  todoElement.append(checkbox);

  todoElement.append(todoSub);

  const deletebutton = createButtonElem("todo__delete", "\u{1F6AB}");

  deletebutton.addEventListener("click", () => {
    todoElement.remove();
    console.log(data.id);
    deleteTodoDB(data.id);
    const dataIndex = currentTodo.indexOf(data);
    currentTodo.splice(dataIndex, 1);
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
