const todoForm = document.querySelector(".card__form-div");
const todoList = document.querySelector(".card__list");

let id = 0;
todoForm.append(formBox());

function stringifyData(textValue, dateValue, priorityValue, descriptionValue) {
  return JSON.stringify({
    text: textValue,
    date: dateValue,
    priority: priorityValue,
    description: descriptionValue,
  });
}

function formBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  const boxTitle = createTextElement("box__title");
  const boxDate = createDateElement("box__date");
  const boxPriority = createPriorityElement("box__priority");
  const boxDescription = createTextElement("box__description");
  const boxSubmitBtn = createButton("box__submit", "Submit");
  const boxDeleteBtn = createButton("box__delete", "Delete");
  boxSubmitBtn.addEventListener("click", onTodoSubmit);

  box.append(
    boxTitle,
    boxDate,
    boxPriority,
    boxDescription,
    boxSubmitBtn,
    boxDeleteBtn
  );

  return box;
}

function createTodoElement() {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  //Todo Checkbox
  todoElement.append(
    createCheckbox("todo__checkbox", (event) => {
      parentElement.children[1].classList.toggle("todo__completed");
    })
  );

  todoViewContent(todoElement); //View Date and Text

  todoElement.append(createButton("todo__edit", "Edit"));
  return todoElement;
}

function createTextElement(className) {
  const text = document.createElement("input");
  text.classList.add(className);
  text.setAttribute("type", "text");
  return text;
}

function createCheckboxElement(className, func) {
  const checkbox = document.createElement("input");
  checkbox.classList.add(className);
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", func);
  return checkbox;
}

function createDateElement(className) {
  const dateElement = document.createElement("input");
  dateElement.classList.add(className);
  dateElement.setAttribute("type", "date");
  return dateElement;
}

function createButton(className, label, eventHandler = null) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = label;
  button.addEventListener("click", eventHandler);
  return button;
}

function createPriorityElement(className) {
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
  return priority;
}

function todoViewContent(todoElement) {
  //Todo View Text
  const todoViewTitle = document.createElement("p");
  todoViewTitle.classList.add("todo__title--view");
  todoViewTitle.value = todoTextValue;

  //Todo View Date
  const todoViewDate = document.createElement("p");
  todoViewDate.classList.add("todo__date--view");
  todoViewDate = dateValue.toDateString();

  //Append all the elements to the todo
  todoElement.append(todoViewText, todoViewDate);
}

function onTodoSubmit(event) {
  console.log(event);
}
