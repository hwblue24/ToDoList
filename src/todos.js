import { parse, isValid } from "date-fns";

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
    const priority = prompt ("Scale priority, 5 highest");
    const dueDate = getValidDate();
    const newToDo = new ToDo (title, description, dueDate, priority); 
    toDoList.push(newToDo);
    return newToDo;

}

const getValidDate = function () {
    let dueDate = prompt ("Enter a due date (MM/dd/yy)");
    let parsedDate = parse(dueDate, "MM/dd/yy", new Date());

    while(!isValid(parsedDate)) {
        alert ("Invalid format");
        dueDate = prompt ("Enter a due date (MM/dd/yy");
        parsedDate = parse(dueDate, "MM/dd/yy", new Date());
    }

return parsedDate;
}

const postToDo = function (newToDo) {
    const content = document.querySelector("#content"); 
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDoItem");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    toDoDiv.textContent = ` - Title:${newToDo.title}, Description: ${newToDo.description}, Due: ${newToDo.dueDate}, Priority: ${newToDo.priority}`;

    content.appendChild(toDoDiv);
    toDoDiv.appendChild(deleteBtn)

}

const removeToDo = function (e) {
    const deleteBtn = e.target; 
    const toDoItem = deleteBtn.closest(".toDoItem"); 
    toDoItem.remove();
}
export{createToDo, postToDo, removeToDo}