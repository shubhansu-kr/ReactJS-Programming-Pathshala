let inputData = document.getElementsByTagName("input")[0];
let todoList = document.getElementsByClassName("todos")[0];


function addToDo() {
    if(inputData.value.length < 1) {
        alert("Empty string");
        return;
    }

    let newTag = document.createElement("li");
    newTag.textContent = inputData.value;
    todoList.appendChild(newTag);
}