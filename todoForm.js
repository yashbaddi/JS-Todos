import { currentTodo } from "./index.js";
import {
  createButtonElem,
  createDateElem,
  createPriorityElem,
  createTextElem,
} from "./abstractedElements.js";
import renderTodo from "./renderTodo.js";

export default function todoForm(data) {
  console.log("undeine dat", data);
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

    if (emptyCheck == 1) {
      currentTodo.push(data);
      const cardList = document.querySelector(".card__list");
      cardList.prepend(renderTodo(data));
    }

    localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
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
