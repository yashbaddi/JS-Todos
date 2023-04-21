import { currentTodo } from "./index.js";
import {
  createButtonElem,
  createDateElem,
  createPriorityElem,
  createTextElem,
  viewText,
} from "./abstracted-elements.js";
import renderTodo from "./render-todo.js";
import { createTodoDB, updateTodoDB } from "./requests.js";

export default function todoForm(data) {
  let isNewElement = false;
  const basedata = {
    id: undefined,
    checked: false,
    title: "",
    date: "",
    prio: "None",
    descript: "",
  };
  if (data === undefined) {
    data = structuredClone(basedata);
    isNewElement = true;
  }

  const formbox = document.createElement("div");
  formbox.classList.add("formbox");

  const formTitle = createTextElem("formbox__title", data.title);
  const formDate = createDateElem("formbox__date", data.date);
  const formPrio = createPriorityElem("formbox__priority", data.prio);
  const formDescript = createTextElem("formbox__description", data.descript);

  const formSubmitBtn = createButtonElem("formbox__btn", "submit", () => {
    data.title = formTitle.value;
    data.date = formDate.value;
    data.prio = formPrio.value;
    data.descript = formDescript.value;
    if (isNewElement === true) {
      createTodoDB(false, data.title, data.date, data.prio, data.descript).then(
        (resid) => {
          // console.log(resid);
          data.id = resid;
          currentTodo.push(data);
          const cardList = document.querySelector(".card__list");
          cardList.prepend(renderTodo(data));
          formTitle.value = "";
          formDate.value = "";
          formPrio.value = "None";
          formDescript.value = "";
          data = structuredClone(basedata);
        }
      );
    } else {
      updateTodoDB(
        data.id,
        data.checked,
        data.title,
        data.date,
        data.prio,
        data.descript
      ).then((res) => {
        formbox.parentElement.replaceWith(renderTodo(data));
      });
    }

    // localStorage.setItem("storeTodo", JSON.stringify(currentTodo));
  });

  formbox.append(
    viewText("formbox__label", "Title:"),
    formTitle,
    viewText("formbox__label", "Date:"),
    formDate,
    viewText("formbox__label", "Priority:"),
    formPrio,
    viewText("formbox__label", "Description:"),
    formDescript,
    formSubmitBtn
  );

  return formbox;
}

//
