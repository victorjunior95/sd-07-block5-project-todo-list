let listOrdered = document.querySelector("#lista-tarefas")

document.querySelector("#criar-tarefa").addEventListener("click", function(){
    let inputText = document.createTextNode(document.querySelector("#texto-tarefa").value);
    let listItem = document.createElement("li");
    listItem.appendChild(inputText);
    listItem.classList.add("list-item");
    listItem.addEventListener("click",function(){
        if (listItem.classList[1] == "selected") {
            listItem.classList.remove("selected");
        } else {
            listItem.classList.add("selected");
        }
    })
    listOrdered.appendChild(listItem);
    document.querySelector("#texto-tarefa").value = ""
    
})