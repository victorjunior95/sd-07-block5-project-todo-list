window.onload = function () {
    let inputText = document.querySelector("#texto-tarefa");
    let createJob = document.querySelector("#criar-tarefa");
    let jobList = document.querySelector("#lista-tarefas");
    let clearAll = document.querySelector("#apaga-tudo");
    let removeDone = document.querySelector("#remover-finalizados");
    let saveJobs = document.querySelector("#salvar-tarefas");
    let moveTop = document.querySelector("#mover-cima");
    let moveBottom = document.querySelector("#mover-baixo");
    let removeSelected = document.querySelector("#remover-selecionado");
    
    /* Criar lista de tarefas */
    createJob.addEventListener("click", addElementList);

    function addElementList() {
        let elementInsert = document.createElement("li");
        let textElement = inputText.value;
        elementInsert.innerText = textElement;
        elementInsert.setAttribute("class", "list");
        jobList.appendChild(elementInsert);
        console.log(elementInsert);
        console.log(textElement);
        inputText.value = "";
        let listItem = document.querySelectorAll("li");
        console.log(listItem);
        return listItem;
    }

    /* Mudar cor de fundo de item selecionado */
    callHoover()

    function callHoover() {
        let listItem = document.querySelectorAll(".li");
        for (index = 0; index < listItem.length; index += 1)
            listItem[index].addEventListener("click", hooverFunction);
            listItem[index].addEventListener("dblclick", strikeOut);
    }

    function hooverFunction() {
        let setLineHoover = event.target;
        listItem.classList.remove("hoover");
        setLineHoover.classList.remove("list");
        setLineHoover.setAttribute("class", "hoover");
    }

    /* Riscar itens selecionados */
    function strikeOut() {
        let setJobDone = event.target;
        if (setJobDone.classList.contains !== "completed") {
            setJobDone.setAttribute("class", "completed");
        } else {
            setJobDone.classList.remove("completed");
        }
    }

    /* Limpar lista inteira */
    clearAll.addEventListener("click", clearList);

    function clearList() {
        jobList.innerHTML = "";
    }

    removeDone.addEventListener("click", clearDone);

    /* Remover itens riscados */
    function clearDone() {
        doneList = querySelectorAll(".completed");
        for (index = 0; index < doneList.length; index += 1) {
            doneList[index].innerHTML = "";
        }
    }

    /* Salvar lista de tarefas */
    saveJobs.addEventListener("click", saveList)
    
    function saveList() {
        
    }








    
}             