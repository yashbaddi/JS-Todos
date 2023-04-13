import renderTodo from "./render-todo.js";
import todoForm from "./todo-form.js";

const cardForm = document.querySelector(".card__form-div");
const formElement = todoForm();
cardForm.append(formElement);

const cardList = document.querySelector(".card__list");

if (localStorage.getItem("storeTodo") === null) {
  localStorage.setItem("storeTodo", "[]");
}
export const currentTodo = JSON.parse(localStorage.getItem("storeTodo"));

currentTodo.forEach((element) => {
  cardList.prepend(renderTodo(element));
  console.log(element);
});
