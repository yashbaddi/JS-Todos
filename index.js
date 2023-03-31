const pendingList = document.querySelector(".pending");
const completedList = document.querySelector(".completed");

function submitHandler() {
  const textbox = document.getElementById("textbox");
  if (!/^\s/.test(textbox.value)) {
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
    todoElement.classList.toggle("done");
    todoElement.remove();
    todoCheckbox.checked
      ? completedList.append(todoElement)
      : pendingList.append(todoElement);
  });

  //Create Text
  todoText.classList.add("todo__text");
  todoText.setAttribute("type", "text");
  todoText.value = todoTextValue;

  //Create Date
  const todoDate = document.createElement("input");
  todoDate.classList.add("todo__date");
  todoDate.setAttribute("type", "date");

  //Create Select Priority
  todoPriority.classList.add("todo__select");
  const optionList = ["None", "High", "Medium", "Low"];
  optionList.forEach((element) => {
    const option = document.createElement("option");
    option.classList.add("todo__option)");
    option.setAttribute("value", element);
    option.textContent = element;
    todoPriority.append(option);
  });

  //Create Delete Button
  todoDelete.textContent = "\u{1F5D1}";
  todoDelete.classList.add("todo__delete");

  todoElement.append(
    todoCheckbox,
    todoText,
    todoDate,
    todoPriority,
    todoDelete
  );

  pendingList.append(todoElement);
}
