import "./styles.css"
import { createAddTasksBtn } from "./tasks";

import { addProjects, nameProjects } from "./addProjects";

//default task button used to add tasks
createAddTasksBtn();


//Handles adding sibling projects
document.querySelector(".addProjects").addEventListener("click", function () {
    addProjects();
});

//renames projects and their class
document.querySelector("nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("namelessBtn")) {
        nameProjects(e);
    }
});
