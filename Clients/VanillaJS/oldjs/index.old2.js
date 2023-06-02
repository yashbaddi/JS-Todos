const todoForm = document.querySelector(".card__form-div");
const todoList = document.querySelector(".card__list");

if (localStorage.getItem("idCounter") == null) {
  localStorage.setItem("idCounter", 1);
}

todoForm.append(formBox());


function formBox(jsonvalue) {
  const formbox = document.createElement("form");
  const formboxTitle = createTextElement("formbox__title");
  const formboxDate = createDateElement("formbox__date");
  const formboxPriority = createPriorityElement("formbox__priority");
  const formboxDescription = createTextElement("formbox__description");
  const formboxSubmitBtn = createButtonElement("formbox__submit", "Submit");

  formboxSubmitBtn.type = "submit";
  formbox.onsubmit = () => {
    localStorage.setItem(
      formbox,
      stringifyData(
        formboxTitle.value,
        formboxDate.value,
        formboxPriority.value,
        formboxDescription.value
      )
    );
    formbox.reset;
  };

  formbox.append(
    formboxTitle,
    formboxDate,
    formboxPriority,
    formboxDescription,
    formboxSubmitBtn
  );

  return formbox;
}


function createTodoElement() {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.id = "todo--" + localStorage.getItem("idCounter");
  localStorage.setItem("idCounter", Number(localStorage.getItem("idCounter"))++)

  //Todo Checkbox
  todoElement.append(
    createCheckbox("todo__checkbox", (event) => {
      parentElement.children[1].classList.toggle("todo__completed");
    })
  );

  todoViewContent(todoElement); //View Date and Text

  todoElement.append(createButtonElement("todo__edit", "Edit"));
  return todoElement;
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
  
  function createButtonElement(className, label, eventHandler = null) {
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

  function stringifyData(textValue, dateValue, priorityValue, descriptionValue) {
    return JSON.stringify({
      text: textValue,
      date: dateValue,
      priority: priorityValue,
      description: descriptionValue,
    });
  }
  

