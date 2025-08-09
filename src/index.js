import "./styles.css"

import { addProjects, nameProjects, matchProjectHeader, buildFromStorage} from "./addProjects";

import { createToDo, postToDo, removeToDo, clearToDoList, buildFromToDoStorage} from "./todos";

document.addEventListener("DOMContentLoaded", () => {
    buildFromStorage(); 
    
    let lastProject = localStorage.getItem("currentProject");
    if (!lastProject) {
        lastProject = "Personal"; // default project
        localStorage.setItem("currentProject", lastProject);
    }

    document.querySelector(".projectHeader").textContent = lastProject;
    buildFromToDoStorage();      
});



//Handles adding sibling projects
document.querySelector(".addProjects").addEventListener("click", function () {
    addProjects();
});

//renames projects and their class
document.querySelector(".projectsNav").addEventListener("click", function (e) {
    if (e.target.classList.contains("namelessBtn")) {
        nameProjects(e);
    }
 
});

document.querySelector(".addTasks").addEventListener("click", function () {
    const newToDo = createToDo(); 
    postToDo(newToDo);
   

})

//handles removing todoItems
document.querySelector("#content").addEventListener("click", function (e) {
    if (e.target.className === "deleteBtn") {
        removeToDo(e);
    }
});

//handles matching project titles with header titles 
document.querySelector(".projectsNav").addEventListener("click", function (e) {
    matchProjectHeader(e);
    clearToDoList();
    buildFromToDoStorage(); 
})