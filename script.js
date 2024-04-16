function addTask(taskDescription) {
    if (taskDescription.trim() !== "") { // Check if task description is not empty after trimming leading and trailing spaces
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox" onchange="toggleCompletion(this)"> ${taskDescription.trim()} <button onclick="removeTask(this)">Remove</button>`; // Trim leading and trailing spaces from task description
        taskList.appendChild(newTask);
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
