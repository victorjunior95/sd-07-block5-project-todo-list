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
    addEventClick(li);
    ol.appendChild(li);
}

function addEventClick(li){
    li.addEventListener('click', function () {
        li.classList.add("select");
    });
}