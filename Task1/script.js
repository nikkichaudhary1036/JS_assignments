const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    createTaskElement(taskText);
    saveTask(taskText);
    input.value = "";
}

function createTaskElement(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn-small edit";
    editBtn.onclick = () => editTask(span, taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-small delete";
    deleteBtn.onclick = () => deleteTask(li, taskText);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

function editTask(span, oldText) {
    const newText = prompt("Edit task:", span.textContent);
    if (newText && newText.trim() !== "") {
        span.textContent = newText;
        updateTaskInStorage(oldText, newText);
    }
}

function deleteTask(li, taskText) {
    li.remove();
    removeFromStorage(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}


function removeFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function updateTaskInStorage(oldText, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(oldText);
    if (index !== -1) {
        tasks[index] = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

