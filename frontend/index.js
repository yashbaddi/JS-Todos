import renderTodo from "./render-todo.js";
import { getAllTodosDB } from "./requests.js";
import todoForm from "./todo-form.js";

export const currentTodo = [];
const cardForm = document.querySelector(".card__form-div");
const formElement = todoForm();
cardForm.append(formElement);

const cardList = document.querySelector(".card__list");

getAllTodosDB().then((res) => {
  // console.log(res);
  currentTodo.push(...res);
  console.log("curr todo", currentTodo);

  currentTodo.forEach((element) => {
    cardList.prepend(renderTodo(element));
    // console.log(element);
  });
});
