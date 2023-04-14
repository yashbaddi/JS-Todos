import { currentTodo } from "./index.js";
import {
  createButtonElem,
  createDateElem,
  createPriorityElem,
  createTextElem,
  viewText,
} from "./abstracted-elements.js";
import renderTodo from "./render-todo.js";

export default function todoForm(data) {
  let emptyCheck = 0;
  if (data === undefined) {
    data = {
      check: false,
      title: "",
      date: "",
      priority: "None",
      description: "",
    };
    emptyCheck = 1;
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

    if (emptyCheck === 1) {
      currentTodo.push(data);
      const cardList = document.querySelector(".card__list");
      cardList.prepend(renderTodo(data));
    } else {
      formbox.parentElement.replaceWith(renderTodo(data));
    }

    localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
  });

  formbox.append(
    viewText("formbox__label", "Title:"),
    formTitle,
    viewText("formbox__label", "Date:"),
    formDate,
    viewText("formbox__label", "Priority:"),
    formPriority,
    viewText("formbox__label", "Description:"),
    formDescription,
    formSubmitBtn
  );

  return formbox;
}

//
