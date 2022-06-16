
// initialize empty array of tasks
tasks = [];
numItems = 0;

function updateInnerHTML(task){
    const tempItem = "item"+numItems;
    var UL = document.createElement("li");  
    UL.innerHTML = task +" ";
    UL.className = 'items'; 
    UL.id = tempItem;

    var btn = document.createElement("button");  
    btn.innerHTML = 'Remove item';
    btn.id = 'btn' + numItems;
    

    
    

    
    console.log(tempItem);
    document.getElementById("toDoItems").appendChild(UL);
    document.getElementById(tempItem).appendChild(btn);
    addNewButton();
    numItems += 1;
    /*
    document.body.appendChild(UL);
    document.body.appendChild(btn);
    document.body.appendChild(br);
    */
      

    /*document.getElementById("toDoItems").innerHTML = outputMessage;*/
}


function addItem(){
    /* get the item */
    const itemToAdd = document.querySelector('input').value.trim();
    if (itemToAdd != ''){
        document.getElementById("tempText").innerHTML = '';
        /* clear the input field */
        document.querySelector('input').value = '';
        
        tasks.push(itemToAdd);
        updateInnerHTML(itemToAdd);
    }
    else{
        alert("Task must not be empty");
    }
}

function clearAllTasks(){
    const list = document.getElementById("toDoItems");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }

    document.getElementById("tempText").innerHTML = 'Things to do will appear here';
}

async function addNewButton(){
    const newBtn = document.getElementById('btn'+numItems);
    newBtn.addEventListener('click', removeSingleItem);
    newBtn.numItem = numItems;
}

function removeSingleItem(evt){

    itemToRemove = evt.currentTarget.numItem;
    console.log(itemToRemove);
    const element = document.getElementById("item"+itemToRemove);
    element.remove();

    if (!document.getElementById("toDoItems").hasChildNodes()){
        document.getElementById("tempText").innerHTML = 'Things to do will appear here';
    } 

}

async function init() {
    console.log("heyyyy");
    
    /* Await add new task button */
    const addTask = document.getElementById('addTask');
    addTask.addEventListener('click', addItem);

    /* Await clear task button */
    const clearTasks = document.getElementById('clearTasks');
    clearTasks.addEventListener('click', clearAllTasks);


    /* Check for enter keypress for input box*/
    let keypress = document.querySelector('input');
    keypress.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            addItem()
        }
    })
}




init()