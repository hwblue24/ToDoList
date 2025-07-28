 //handles creating sibling projects 
const addProjects = function () {
    const projectsNav = document.querySelector(".projectsNav");
    const createProjectsBtn = document.createElement("button");
    createProjectsBtn.classList.add("namelessBtn")
    createProjectsBtn.textContent = "Click to Name Project"
    projectsNav.appendChild(createProjectsBtn)

}


//handles renaming sibling projects and their class
const nameProjects = function (e) {
    const newName = prompt("Rename this project:");
    const namelessBtn = e.target;
    if (newName) {
        namelessBtn.textContent = newName
        namelessBtn.classList.remove("namelessBtn")
        namelessBtn.classList.add("named")
    }

}
export {addProjects, nameProjects}