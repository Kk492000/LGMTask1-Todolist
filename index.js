const form = document.querySelector("form");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", addTask);


function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  const li = document.createElement("li");
  li.className = "task";
  li.appendChild(document.createTextNode(taskInput.value));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-task";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  taskList.insertBefore(li, taskList.firstChild);


  taskInput.value = "";

  e.preventDefault();
}

taskList.addEventListener("click", removeTask);

function removeTask(e) {
  if (e.target.classList.contains("delete-task")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.remove();
    }
  }
}
