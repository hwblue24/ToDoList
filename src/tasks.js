//create tasks button, gets created once a category is clicked
const createAddTasksBtn = function () { 
    const addTasks = document.querySelector(".addTasks"); 
    const button = document.createElement("button");
    button.textContent = "Tasks"
    addTasks.appendChild(button)

};

export {createAddTasksBtn}