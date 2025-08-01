// class used to create ToDo objects
class ToDo {
    constructor (title, description, dueDate, priority) {
        this.title = title; 
        this.description = description; 
        this.dueDate = dueDate; 
        this.priority = priority;
    }
}

const toDoList = [];
//ToDo objects creation function 
const createToDo = function () {
    
    const title = prompt ("what is the title?");
    const description = prompt ("what is the description?");
    const dueDate = prompt ("Due date mm/dd/yy");
    const priority = prompt ("Scale priority, 5 highest");
    const newToDo = new ToDo (title, description, dueDate, priority); 
    toDoList.push(newToDo);
    return newToDo;

}

const postToDo = function (newToDo) {
    const content = document.querySelector("#content"); 
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDoItem");
    toDoDiv.textContent = ` - Title:${newToDo.title}, Description: ${newToDo.description}, Due: ${newToDo.dueDate}, Priority: ${newToDo.priority}`;
    content.appendChild(toDoDiv);

}

const removeToDo = function (e) {
    const toDoItem = e.target; 
    toDoItem.remove();
}
export{createToDo, postToDo, removeToDo}