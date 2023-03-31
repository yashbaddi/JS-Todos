const pendingList = document.querySelector(".card__pending");
const completedList = document.querySelector(".card__completed");

function submitHandler() {
  const textbox = document.getElementById("textbox");

  if (/[\S]/.test(textbox.value)) {
    addTodo(textbox.value);
  }

  textbox.value = "";
  console.log(textbox.value);
  console.log("hey");
}

function addTodo(todoTextValue) {
  const todoElement = document.createElement("div");
  const todoCheckbox = document.createElement("input");
  const todoText = document.createElement("input");
  const todoPriority = document.createElement("select");
  const todoDelete = document.createElement("button");

  todoElement.classList.add("todo");

  //Todo Checkbox
  todoCheckbox.classList.add("todo__checkbox");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.addEventListener("change", (event) => {
    todoText.classList.toggle("todo__completed");
    todoElement.remove();
    todoCheckbox.checked
      ? completedList.append(todoElement)
      : pendingList.append(todoElement);
  });

  //Todo Text
  todoText.classList.add("todo__text");
  todoText.setAttribute("type", "text");
  todoText.value = todoTextValue;

  //Todo Date
  const todoDate = document.createElement("input");
  todoDate.classList.add("todo__date");
  todoDate.setAttribute("type", "date");

  //Todo Select Priority
  todoPriority.classList.add("todo__select");
  const optionList = ["None", "High", "Medium", "Low"];

  optionList.forEach((element) => {
    const option = document.createElement("option");
    option.classList.add("todo__option)");
    option.setAttribute("value", element);
    option.textContent = element;
    todoPriority.append(option);
  });

  //Todo Delete Button
  todoDelete.textContent = "\u{1F5D1}";
  todoDelete.addEventListener("click", (event) => {
    todoElement.remove();
  });
  todoDelete.classList.add("todo__delete");

  //Append all the elements to the todo
  todoElement.append(
    todoCheckbox,
    todoText,
    todoDate,
    todoPriority,
    todoDelete
  );

  //Add the elements to the pending list
  pendingList.append(todoElement);
}
