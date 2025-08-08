//handles creating sibling projects 
const addProjects = function () {
    const projectsNav = document.querySelector(".projectsNav");
    const createProjectsBtn = document.createElement("button");
    createProjectsBtn.classList.add("namelessBtn")
    createProjectsBtn.textContent = "Click to Name Project"
    projectsNav.appendChild(createProjectsBtn)

}

let projectNamesArray = [];

//handles renaming sibling projects and their div class and saving to local storage
const nameProjects = function (e) {
    const newName = prompt("Rename this project:");
    const namelessBtn = e.target;
    if (newName) {
        projectNamesArray.push(newName);
        namelessBtn.textContent = newName;
        namelessBtn.classList.remove("namelessBtn")
        namelessBtn.classList.add("named")
        renameProjectHeader(newName);
        savingToLocalStorage();
       
    }

}

const savingToLocalStorage = function () {
    localStorage.setItem("projectNames", JSON.stringify(projectNamesArray));
}

const buildFromStorage = function () {
    const storedProjectNames = JSON.parse(localStorage.getItem("projectNames"));
  
    if (storedProjectNames) {
        //syncs in-memory with local storage
        projectNamesArray = storedProjectNames;

        storedProjectNames.forEach(function(element) {
            const projectsNav = document.querySelector(".projectsNav");
            const createProjectsBtn = document.createElement("button");
            createProjectsBtn.classList.add("named")
            createProjectsBtn.textContent = `${element}`
            projectsNav.appendChild(createProjectsBtn)
    
        })
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
    deleteToDos();
}

const deleteToDos = function () {
    const content = document.querySelector("#content"); 
    if (content.hasChildNodes()) {
        content.innerHTML = "";
    }
}


export {addProjects, nameProjects, matchProjectHeader, buildFromStorage}