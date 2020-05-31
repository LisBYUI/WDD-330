const toDoListName = "myToDos";

// Save todos in local storage in JSON format
export function saveToList(todo){
    console.log("setting local storage...");
    if(!localStorage.getItem(toDoListName)){
        var storageArray = [];
        storageArray.push(todo);
        localStorage.setItem(toDoListName, JSON.stringify(storageArray));
    }
    else{
        var storageArray = JSON.parse(localStorage.getItem(toDoListName));
        storageArray.push(todo);
        localStorage.setItem(toDoListName, JSON.stringify(storageArray));
        console.log(storageArray);

    }
}

// Retrieve todos from local storage, parsed to object format according to applied filter (if any)
export function retrieveList(filter){
    console.log('filter: ' + filter);
    let list = JSON.parse(localStorage.getItem(toDoListName));
    if(list != null){
        if(filter != null && filter != "all"){
            list = list.filter(task=> {
                console.log("task.completed: ");
                console.log(task.completed);
                return task.completed === filter;
            }); 
        }
    }
    return list;
}

// Update todos in local storage that have been checked complete
export function updateChecked(id){
    let array = JSON.parse(localStorage.getItem(toDoListName));
    for(let i = 0; i < array.length; i++){
        if(parseInt(array[i].id, 10) === parseInt(id, 10)){
            if(array[i].completed === false){
                array[i].completed = true;
            }
            else{
                array[i].completed = false;
            }
        }
    }
    localStorage.setItem(toDoListName, JSON.stringify(array));
}

// Remove todos from local storage
export function updateRemove(id){
    let array = JSON.parse(localStorage.getItem(toDoListName));
    
    for(let i = 0; i < array.length; i++){
        console.log('passed id: ' + id);
        console.log(array[0].id);
        if(parseInt(array[i].id, 10) === parseInt(id, 10)){
            array.splice(i,1);
        }
    }
    localStorage.setItem(toDoListName, JSON.stringify(array));
}