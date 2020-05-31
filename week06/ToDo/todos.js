import { getDOMContent, resetDOMContent, renderToDoList, countRemainingTodos } from './utilities.js'
import { saveToList, retrieveList, updateChecked, updateRemove } from './ls.js'

export default class ToDo {
    constructor(){
        this.completed = false;
        this.id = Date.now();
    }

    getContent(){
        this.content = getDOMContent();
    }

    checkOff(){
        this.completed = true;
    }

    addToList(){
        const content = getDOMContent();
        if(content != ""){
            this.content = content;
            saveToList(this);
            resetDOMContent();
        }
    }

    getToDoList(filter){
        const list = retrieveList(filter);
        console.log("list retrieved");
        console.log(list);
        return list;
    }

    // Show the to-do list according to filter (complete, not complete, all)
    showToDoList(filter){
        if(this.getToDoList(filter) != null){
            renderToDoList(document.getElementById("toDoList"), this.getToDoList(filter));
            this.addCheckedListener();
            this.addRemoveListener();
        }
        countRemainingTodos(document.getElementById("numTasksLeft"), this.getToDoList(false));
    }

    // Add listener to complete todos when clicked
    addCheckedListener(){
        const toDoArray = document.querySelector("ul");
        //Add event listener to each LI.
        toDoArray.addEventListener("click", function(e){
            if(e.target.tagName === "LI"){
                updateChecked(e.target.id);
                location.reload();
            }
        });
        console.log(toDoArray);
    }

    // Add listener to filter the list
    addFilterEventListener(){
        const toDo = this;
        const filters = document.getElementsByClassName("filter")
        for(let i = 0; i < filters.length; i++){
            filters[i].addEventListener("click", function(e){
                console.log("e: " + e.target.id);
                if(e.target.id === "active"){
                    toDo.showToDoList(false);
                    
                }
                else if(e.target.id === "completed"){
                    toDo.showToDoList(true);
                }
                else{
                   toDo.showToDoList("all");
                }
            });
        }  
    }  
    
      // Add listener to remove todos from list
      addRemoveListener(){
        const toDoArray = document.getElementsByClassName("close");
        console.log(toDoArray);
        for(let i = 0; i < toDoArray.length; i++){
            toDoArray[i].addEventListener("click", function(e){
                updateRemove(e.target.id);
                location.reload();
            });
        }  
    }
}