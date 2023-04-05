const pendingList = document.querySelector(".card__pending");
const completedList = document.querySelector(".card__completed");
const createTodoBtn = document.getElementById("create-todo");

createTodoBtn.addEventListener("click", (event) => {});
function submitHandler() {
  const textbox = document.getElementById("textbox");

  if (/[\S]/.test(textbox.value)) {
    addTodo(textbox.value);
  }

  textbox.value = "";
}

function addTodo(textValue, dateValue, priorityValue, descriptionValue) {
  return JSON.stringify({
    text: textValue,
    date: dateValue,
    priority: priorityValue,
    description: descriptionValue,
  });
}

function expandBox() {
  const box = document.createElement("div");
  box.classList.add("box");

  createTextElement(box, "box__text");
  createDateElement(box, "box__date");
  createPriorityElement(box, "box__priority");
  createTextElement(box, "box__description");

  document.body.append(box);
}

function createTodoElement(parentElement) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  //Todo Checkbox
  createTodoCheckbox(todoElement, "todo__checkbox", (event) => {
    parentElement.children[1].classList.toggle("todo__completed");
  });

  createTodoViewContent(todoElement); //View Date and Text

  //Todo Edit Button
  const todoEditButton = document.createElement("button");
  todoEditButton.classList.add("todo__edit");
  todoElement.append(todoEditButton);

  parentElement.append(todoElement);
}

function createTextElement(parentElement, className) {
  const text = document.createElement("input");
  text.classList.add(className);
  text.setAttribute("type", "text");
  parentElement.append(text);
}

function createCheckboxElement(parentElement, className, func) {
  const todoCheckbox = document.createElement("input");
  todoCheckbox.classList.add(className);
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.addEventListener("change", func);
  parentElement.append();
}

function createDateElement(parentElement, className) {
  const dateElement = document.createElement("input");
  dateElement.classList.add(className);
  dateElement.setAttribute("type", "date");
  parentElement.append(dateElement);
}

function createPriorityElement(parentElement, className) {
  const priority = document.createElement("select");
  priority.classList.add(className);
  const optionList = ["None", "High", "Medium", "Low"];

  optionList.forEach((element) => {
    const option = document.createElement("option");
    option.classList.add("option)");
    option.setAttribute("value", element);
    option.textContent = element;
    priority.append(option);
  });
  parentElement.append(priority);
}

function createTodoViewContent(todoElement) {
  //Todo View Text
  const todoViewText = document.createElement("p");
  todoViewText.classList.add("todo__text");
  todoViewText.value = todoTextValue;

  //Todo View Date
  const todoViewDate = document.createElement("p");
  todoViewDate.classList.add("todo__date");
  todoViewDate = dateValue.toDateString();

  //Append all the elements to the todo
  todoElement.append(todoViewText, todoViewDate);
}
