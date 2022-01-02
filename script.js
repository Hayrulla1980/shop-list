const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//functions
const addTodo = (event) => {
    //prevent form from submiting
    event.preventDefault()
    console.log("hey")
    //creating todo div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todoDiv")
    //creating LI
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //creating complete button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    //creating delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>"
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    //append todoDiv to UL
    todoList.appendChild(todoDiv)
    todoInput.value = ""

}


//event-listeners
todoButton.addEventListener("click", addTodo)