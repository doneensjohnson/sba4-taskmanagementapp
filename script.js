// Grab DOM Elements
// Console.log to make sure you're grabbing the right element.

const input = document.getElementById("todoInput");
    console.log(input);

const button = document.getElementById("addButton");
    console.log(button);

const todoList = document.getElementById("todoList");
    console.log(todoList);

const category = document.getElementById("category");
    console.log(category);

const deadline = document.getElementById("deadline");
    console.log(deadline);

const taskStatus = document.getElementById("taskStatus");
    console.log(taskStatus);

let taskList = [];

// One click function that:
// Grabs Input
// Appends to the DOM
// Clear the Input

// When creating an event listener - we have 2 arguments:
// One: The action - click, hover, button press, etc.
// Two: Function - the behavior, what happens after the click.
button.addEventListener("click", addItem);

function addItem() {
    console.log("Button clicked!");
  // Store the input
const task = {
    today: todayDate.value,
    taskName: input.value,
    category: category.value,
    deadline: deadline.value,
    status: taskStatus.value,
  };
      taskList.push(task);

  // Create a new DOM element
const newTask = document.createElement("li");

  // Add input text in the newly created li
  // newTask.textContent = task

  newTask.textContent =
    task.taskName +    "      |      " +
    task.category +    "      |      " +
    task.deadline +    "      |      " +
    task.status;

  // Add the newly created li to the existing ul
  todoList.appendChild(newTask);

  // Reset the input
  input.value = "";
  category.value = "";
  deadline.value = "";
  taskStatus.value = "";

  function addItem() {
       console.log(taskList);
       displayTasks();
  }
  function displayTasks() {}
     todoList.innerHTML = "";

  taskList.forEach(function (task) {
    let newTask = document.createElement("li");
    newTask.textContent =
      task.taskName +    "      |      " +
      task.category +    "      |      " +
      task.deadline +    "      |      " +
      task.status;

    let today = document.getElementById("todayDate").value;
    if (today > task.deadline && task.status !== "Completed") {
      newTask.style.color = "red";
      newTask.textContent += " - PAST DUE!";
    }
    todoList.appendChild(newTask);
  });
}

// Set up a function for the date to mark items past due

function date(task) {
  let today = document.getElementById("todayDate").value;
  let deadline = task.deadline;
  if (today > deadline && task.status !== "Completed") {
    alert("This task is past due!");
  }
}
