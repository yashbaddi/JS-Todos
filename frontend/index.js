import { renderTodoForm } from "./render-todo-form.js";
import renderTodo from "./render-todo.js";
import { createTodoRequest, getAllTodosRequest } from "./requests.js";

export const currentTodo = [];
const cardForm = document.querySelector(".card__form-div");
const formElement = renderTodoForm(
  {
    checked: false,
    title: "",
    date: "",
    priority: "None",
    description: "",
  },
  (createdData, form) => {
    console.log(createdData);
    onSubmitCreate(createdData);
    form.reset();
  }
);
cardForm.append(formElement);

const cardList = document.querySelector(".card__list");

getAllTodosRequest().then((res) => {
  // console.log(res);
  currentTodo.push(...res);

  currentTodo.forEach((element) => {
    cardList.prepend(renderTodo(element));
    // console.log(element);
  });
});

function onSubmitCreate(data) {
  console.log("from on submit", data);
  createTodoRequest(data).then((res) => {
    (data.id = res.id), currentTodo.push(data);
    cardList.prepend(renderTodo(data));
  });
}
