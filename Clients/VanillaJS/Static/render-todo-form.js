import {
  createDOMElement,
  createPriorityElement,
} from "./abstracted-elements.js";

export function renderTodoForm(data, eventHandler) {
  const title = createDOMElement("input", ["todo-form__title"], [], {
    type: "text",
    name: "title",
    value: data.title,
  });

  const date = createDOMElement(
    "input",
    ["todo-form__date"],
    [],
    {
      type: "date",
      name: "date",
      min: new Date().toISOString().split("T")[0],
      value: data.date,
    },
    {
      click: (e) => {},
    }
  );
  const priority = createPriorityElement("todo-form__priority", data.priority);
  priority.name = "priority";

  const description = createDOMElement(
    "textarea",
    ["todo-form__description"],
    [],
    {
      name: "description",
    },
    data.description
  );

  const submitBtn = createDOMElement(
    "button",
    ["todo-form__submit"],
    [],
    {
      type: "submit",
    },
    "Submit"
  );

  const todoForm = createDOMElement(
    "form",
    ["todo-form"],
    [
      "Title",
      title,
      "Date",
      date,
      "Priority",
      priority,
      "Description",
      description,
      submitBtn,
    ]
  );
  submitBtn.addEventListener("click", () => {
    console.log(todoForm.elements);
    data.title = todoForm.elements.title.value;
    data.date = todoForm.elements.date.value;
    data.priority = todoForm.elements.priority.value;
    data.description = todoForm.elements.description.textContent;
    console.log(data);
    eventHandler(data, todoForm);
  });

  return todoForm;
}
