const btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", function () {

    let inputItem = document.querySelector("#texto-tarefa").value;
    createLi(inputItem);
    document.querySelector("#texto-tarefa").value = "";
       
});

function createLi(inputValue){
    const ol = document.querySelector("#lista-tarefas");
    const li = document.createElement("li")
    li.innerText = inputValue;
    ol.appendChild(li);

}