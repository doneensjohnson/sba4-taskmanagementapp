
// Grab DOM Elements
const input = document.getElementById("todoInput");
const button = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const category = document.getElementById("selectCategory");
const deadline = document.getElementById("deadline");
const taskStatus = document.getElementById("taskStatus");
const todayDate = document.getElementById("todayDate");

const filterStatus = document.getElementById("filterStatus");
const filterCategory = document.getElementById("filterCategory");

// Store tasks
let taskList = [];

// Listen for button click
button.addEventListener("click", addItem);

// Add a task
function addItem() {
    console.log("Button clicked!");

    // Today's Date
    const dateElement = document.getElementById("todayDate");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
        dateElement.textContent = today.toDateString();


    // Create task object
    const task = {
    today: today.toDateString(), // or use 'today' if you want the full Date object
    taskName: input.value,
    category: category.value,
    deadline: deadline.value,
    status: taskStatus.value
};
    console.log(today);
    console.log(task);

   
    // Add task to array
    taskList.push(task);

    console.log(taskList);

    // Check deadline
    date(task);

    // Display tasks
    displayTasks();

    // Clear inputs
    input.value = "";
    category.value = "Category";
    deadline.value = "";
    taskStatus.value = "";
}

// Display tasks
function displayTasks() {

    // Clear existing list
    todoList.innerHTML = "";

    // Go through each task
    taskList.forEach(function (task) {

        // Create a new list item
        let newTask = document.createElement("li");

        newTask.textContent =
            task.taskName +
            " ~~~ " +
            task.category +
            " ~~~ " + 
            task.deadline + 
            " ~~~ " +
            task.status;

        // Check if task is past due
        if (
            task.today &&
            task.deadline &&
            task.today > task.deadline &&
            task.status !== "Completed"
        ) {
            newTask.style.color = "red";
            newTask.textContent += " - PAST DUE!";
        }

        // Apply filters
        if (
            (filterStatus.value === "All" ||
                task.status === filterStatus.value) &&

            (filterCategory.value === "All" ||
                task.category === filterCategory.value)
        ) {
            todoList.appendChild(newTask);
        }
    });
}

// Check deadline
function date(task) {
    if (
        task.today &&
        task.deadline &&
        task.today > task.deadline &&
        task.status !== "Completed"
    ) {
        alert("This task is past due!");
    }
}

// Listen for filter changes
filterStatus.addEventListener("change", displayTasks);
filterCategory.addEventListener("change", displayTasks);
