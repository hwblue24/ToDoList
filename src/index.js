import "./styles.css"

import { addProjects, nameProjects } from "./addProjects";

import { createToDo, postToDo} from "./todos";


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

document.querySelector(".addTasks").addEventListener("click", function () {
    const newToDo = createToDo(); 
    postToDo(newToDo);
   

})
