import ToDo from './todos.js';

const addButton = document.getElementById("add");
addButton.addEventListener("click", function(){
    // Create instance of todo object. Add to list.
    const todo = new ToDo();
    todo.addToList();
    todo.showToDoList();
    todo.addFilterEventListener();
});

window.addEventListener('load', () => {
    // Show a list of existing todos on load
    const todo = new ToDo();
    todo.showToDoList();
    todo.addFilterEventListener();
  });