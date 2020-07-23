var list = document.getElementById("list");

function addTodo(){

    //GET THE INPUT USING document.getElementById 
    var todo_item = document.getElementById("todo-item");
    //GOT THE INPUT USING document.getElementById 

    //MAKE LI TAG WITH TEXT NODE
    var li = document.createElement('li');
    li.setAttribute("class", "lead todoLi");
    var liText = document.createTextNode(todo_item.value);
    //MADE LI TAG WITH TEXT NODE

    //CLEAR INPUT AFTER ENTER
    li.appendChild(liText);
    list.appendChild(li);
    todo_item.value = ""; 
    //CLEARED INPUT AFTER ENTER
    
    //MAKE EDIT BUTTON
    var editBtn = document.createElement('i');
    editBtn.setAttribute("class", "fa fa-pencil-square-o fa-lg icon");
    editBtn.setAttribute("style", "color: #bfc0c0");
    editBtn.setAttribute("onclick", "editItem(this)");
    //MADE EDIT BUTTON
    
    //MAKE DELETE BUTTON
    var delBtn = document.createElement('i');
    // var delTxt = document.createTextNode("");
    delBtn.setAttribute("class", "fa fa-trash fa-lg trash icon");
    delBtn.setAttribute("style", "color: #bfc0c0");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    // delBtn.appendChild(delTxt);
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    //MADE DELETE BUTTON
}

function deleteItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var editValue = prompt("Enter edited todo.",  e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll(){
    list.innerHTML = "";
}