//handles creating sibling projects 
const addProjects = function () {
    const projectsNav = document.querySelector(".projectsNav");
    const createProjectsBtn = document.createElement("button");
    createProjectsBtn.classList.add("namelessBtn")
    createProjectsBtn.textContent = "Click to Name Project"
    projectsNav.appendChild(createProjectsBtn)

}


//handles renaming sibling projects and their div class
const nameProjects = function (e) {
    const newName = prompt("Rename this project:");
    const namelessBtn = e.target;
    if (newName) {
        namelessBtn.textContent = newName;
        namelessBtn.classList.remove("namelessBtn")
        namelessBtn.classList.add("named")
        renameProjectHeader(newName);
    }

}

//handles renaming projectHeader 
const renameProjectHeader = function (newName) { 
    const projectHeader = document.querySelector(".projectHeader");
    projectHeader.textContent = newName; 
}

//handles matching project titles with header titles 
const matchProjectHeader = function (e) {
    const textContent = e.target.textContent;
    const projectHeader = document.querySelector(".projectHeader");
    projectHeader.textContent = textContent;


}

export {addProjects, nameProjects, matchProjectHeader}