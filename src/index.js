import { createAddTasksBtn } from "./tasks";

import { addProjects, nameProjects } from "./addProjects";

//connect to event listener clicking buttons on top creates tasks 
createAddTasksBtn();


//Handles adding new tasks 
document.querySelector(".addProjects").addEventListener("click", function () {
    addProjects();
});

//renames nameless project btns
document.querySelector("nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("namelessBtn")) {
        nameProjects(e);
    }
});
