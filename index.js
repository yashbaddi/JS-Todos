import renderTodo from "./renderTodo.js";
import todoForm from "./todoForm.js";

const cardForm = document.querySelector(".card__form-div");
const cardList = document.querySelector(".card__list");

if (localStorage.getItem("storeTodo") === null) {
  localStorage.setItem("storeTodo", "[]");
}
export const currentTodo = JSON.parse(localStorage.getItem("storeTodo"));

currentTodo.forEach((element) => {
  cardList.prepend(renderTodo(element));
});

const formElement = todoForm();
cardForm.append(formElement);
