import { createDOMElement } from "./abstracted-elements.js";
import { currentTodo } from "./index.js";
import { renderTodoForm } from "./render-todo-form.js";
import { deleteTodoRequest, updateTodoRequest } from "./requests.js";

export default function renderTodo(data) {
  const todoFormEditDiv = createDOMElement("div", "todo__formdiv");
  todoFormEditDiv.style.display = "none";

  const todoSub = todoSubContainer(data.title, data.date, todoFormEditDiv);

  const checkbox = createDOMElement("input", ["todo__checkbox"], [], {
    type: "checkbox",
    checked: data.checked,
  });

  checkbox.addEventListener("change", (event) => {
    onCheckboxEvent(event, todoSub, data);
  });

  const deletebutton = createDOMElement(
    "button",
    ["todo__delete"],
    [],
    {},
    "\u{1F6AB}"
  );

  const todoElement = createDOMElement(
    "div",
    ["todo"],
    [checkbox, todoSub, deletebutton, todoFormEditDiv]
  );

  const todoFormEdit = renderTodoForm(data, (updatedData, form) => {
    onSubmitUpdate(form, updatedData, todoElement);
  });
  todoFormEditDiv.append(todoFormEdit);

  deletebutton.addEventListener("click", () => {
    todoElement.remove();
    deleteTodoRequest(data.id);
    const dataIndex = currentTodo.indexOf(data);
    currentTodo.splice(dataIndex, 1);
  });

  return todoElement;
}

function todoSubContainer(dataTitle, dataDate, dataForm) {
  const title = createDOMElement("p", ["todo__title"], [], {}, dataTitle);
  const date = createDOMElement("p", ["todo__date"], [], {}, dataDate);
  const edit = createDOMElement("div", ["todo__edit"]);

  const todoSubContainer = createDOMElement(
    "div",
    ["todo__sub"],
    [title, date, edit]
  );

  todoSubContainer.addEventListener("click", displayEventHandler(dataForm));
  edit.addEventListener("click", () => {
    edit.classList.toggle("edit-arrow-rotate");
  });
  edit.addEventListener("click", displayEventHandler(dataForm));
  return todoSubContainer;
}

function displayEventHandler(element) {
  return () => {
    if (element.style.display == "none") {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  };
}

function onCheckboxEvent(event, container, data) {
  event.target.checked
    ? container.classList.add("todo__completed")
    : container.classList.remove("todo__completed");
  data.checked = !data.checked;
  updateTodoRequest(data);
}

function onSubmitUpdate(form, updatedData, element) {
  updateTodoRequest(updatedData).then((res) => {
    element.replaceWith(renderTodo(updatedData));
  });
}
