export function createTextElem(className, defaultValue = "") {
  const text = document.createElement("input");
  text.classList.add(className);
  text.setAttribute("type", "text");
  text.value = defaultValue;
  return text;
}

export function createCheckboxElem(
  className,
  func = null,
  defaultValue = false
) {
  const checkbox = document.createElement("input");
  checkbox.classList.add(className);
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = defaultValue;
  checkbox.addEventListener("change", func);
  return checkbox;
}

export function createDateElem(className, defaultValue = "") {
  const dateElement = document.createElement("input");
  dateElement.classList.add(className);
  dateElement.setAttribute("type", "date");
  var today = new Date().toISOString().split("T")[0];
  dateElement.setAttribute("min", today);
  dateElement.value = defaultValue;
  return dateElement;
}

export function createPriorityElem(className, defaultValue = "None") {
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
  priority.value = defaultValue;
  return priority;
}

export function createButtonElem(className, label, eventHandler = null) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = label;
  button.addEventListener("click", eventHandler);
  return button;
}

export function viewText(className, inputValue = "") {
  const viewText = document.createElement("p");
  viewText.classList.add(className);
  viewText.textContent = inputValue;
  return viewText;
}

export function viewDate(className, inputValue = "Date Not Set") {
  const viewDate = document.createElement("p");
  viewDate.classList.add(className);
  viewDate.textContent = inputValue;
  return viewDate;
}

export function stringifyData(
  checkboxValue,
  textValue,
  dateValue,
  priorityValue,
  descriptionValue
) {
  return JSON.stringify({
    check: checkboxValue,
    text: textValue,
    date: dateValue,
    priority: priorityValue,
    description: descriptionValue,
  });
}
