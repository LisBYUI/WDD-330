// Get dom content of text input
export function getDOMContent(){
    const content = document.getElementById('addToDo').value;
    return content;
}

// Reset input field to blank
export function resetDOMContent(){
    document.getElementById('addToDo').value = "";
}

// Display to do list
export function renderToDoList(parent, list){
    parent.innerHTML = "";
    list.forEach(toDo => {
        renderToDo(toDo);
    });}

// Display individual todos
function renderToDo(toDo){
    //Display Todo
    const item = document.createElement("li");
    item.id = toDo.id;
    if(toDo.completed){
        //Add complete class name for later
        item.className = "complete";
    }
    const text = document.createTextNode(toDo.content);
    item.appendChild(text);
    document.getElementById("toDoList").appendChild(item);

    // Display close button
    const span = document.createElement("SPAN");
    const removeIndicator = document.createTextNode("\u00D7");
    span.appendChild(removeIndicator);
    span.className = "close";
    span.id = toDo.id;
    item.appendChild(span);
}

// Sum the number of todos that are not completed
export function countRemainingTodos(domLocation, list){
    if(list != null){
        const count = list.length;
        domLocation.innerText = "Tasks left: " + count;
    }
}

export function nothingToDo(domLocation, list){
    if(list == null){
        domLocation.innerText = "Nothing to do! Add a task?";
    }
}