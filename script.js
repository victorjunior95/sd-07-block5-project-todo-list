window.onload = function () {

let buttonComand = document.querySelector("#criar-tarefa");
let inputAdd = document.getElementById("texto-tarefa");
let organizedList = document.getElementById("lista-tarefas");


buttonComand.addEventListener('click', function (){
    let addOnOl = document.createElement("li");
    addOnOl.innerText = inputAdd.value
    document.organizedList.appendChild(addOnOl)
})
}