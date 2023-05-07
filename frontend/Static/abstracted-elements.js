export function createDOMElement(
  elementName,
  classArray = [],
  childNodesArray = [],
  customDomObject = {},
  innerTextData = ""
) {
  const element = document.createElement(elementName);
  element.innerText = innerTextData;
  assignAttributes(element, customDomObject);
  element.classList.add(...classArray);
  element.append(...childNodesArray);
  return element;
}

function assignAttributes(element, object1) {
  for (const [key, value] of Object.entries(object1)) {
    if (element[key] !== undefined) {
      element[key] = value;
    } else {
      element.setAttribute(key, value);
    }
  }
}

export function createPriorityElement(className, defaultValue = "None") {
  const priority = document.createElement("select");
  priority.classList.add(className);
  const optionList = ["None", "High", "Medium", "Low"];

  optionList.forEach((element) => {
    const option = document.createElement("option");
    option.classList.add("option");
    option.setAttribute("value", element);
    option.textContent = element;
    priority.append(option);
  });
  priority.value = defaultValue;
  return priority;
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
