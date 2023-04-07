import { currentTodo } from "./index.js";
import {
  createButtonElem,
  createDateElem,
  createPriorityElem,
  createTextElem,
} from "./abstractedElements.js";
import renderTodo from "./renderTodo.js";

export default function todoForm(data) {
  if (data === undefined) {
    data = {
      check: false,
      title: "",
      date: "",
      priority: "None",
      description: "",
    };
    currentTodo.push(data);
  }
  const formbox = document.createElement("div");
  formbox.classList.add("formbox");
  const formTitle = createTextElem("formbox__title", data.title);
  const formDate = createDateElem("formbox__date", data.date);
  const formPriority = createPriorityElem("formbox__priority", data.priority);
  const formDescription = createTextElem(
    "formbox__description",
    data.description
  );

  const formSubmitBtn = createButtonElem("formbox__btn", "submit", () => {
    data.title = formTitle.value;
    data.date = formDate.value;
    data.priority = formPriority.value;
    data.description = formDescription.value;

    localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
    renderTodo;
  });

  formbox.append(
    formTitle,
    formDate,
    formPriority,
    formDescription,
    formSubmitBtn
  );

  return formbox;
}

//
