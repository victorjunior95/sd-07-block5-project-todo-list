window.onload = function () {
    let inputText = document.querySelector("#texto-tarefa");
    let createJob = document.querySelector("#criar-tarefa");
    let jobList = document.querySelector("#lista-tarefas");
    let clearAll = document.querySelector("#apaga-tudo");
    let removeDone = document.querySelector("#remover-finalizados");
    let saveJobs = document.querySelector("salvar-tarefas");
    let moveTop = document.querySelector("mover-cima");
    let moveBottom = document.querySelector("mover-baixo");
    let removeSelected = document.querySelector("remover-selecionado");

    createJob.addEventListener("click", addElementList);

    function addElementList() {
        let elementInsert = document.createElement("li");
        let textElement = inputText.value;
        elementInsert.innerText = textElement;
        jobList.appendChild(elementInsert);
        /* .setAttribute("", ""); */
        console.log(textElement);
        inputText.value = "";
    }

}             