function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox" onchange="toggleCompletion(this)"> ${taskDescription} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

function toggleCompletion(checkbox) {
    var taskItem = checkbox.parentNode;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
        var completedTasksList = document.getElementById("completedTasks");
        var completedTask = document.createElement("li");
        completedTask.textContent = taskItem.textContent;
        completedTasksList.appendChild(completedTask);
    } else {
        taskItem.classList.remove("completed");
        var completedTasksList = document.getElementById("completedTasks");
        var completedTask = Array.from(completedTasksList.getElementsByTagName("li")).find(task => task.textContent === taskItem.textContent);
        completedTasksList.removeChild(completedTask);
    }
}
