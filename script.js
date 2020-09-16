let listOrdered = document.querySelector("#lista-tarefas");
let selectedjob = document.querySelector(".selected");

document.querySelector("#criar-tarefa").addEventListener("click", function(){
    let inputText = document.createTextNode(document.querySelector("#texto-tarefa").value);
    let listItem = document.createElement("li");
    selectedjob = document.querySelector(".selected");
    listItem.appendChild(inputText);
    listItem.classList.add("list-item");
    listItem.addEventListener("click",function(){
        if (listItem.classList[1] == "selected") {
            listItem.classList.remove("selected");
        } else {
            if (selectedjob == null ) {
            listItem.classList.add("selected")
            selectedjob = document.querySelector(".selected");
            } else {
            selectedjob.classList.remove("selected");
            listItem.classList.add("selected"); 
            selectedjob = document.querySelector(".selected");   
            }
        }
    })
    listOrdered.appendChild(listItem);
    document.querySelector("#texto-tarefa").value = ""
})