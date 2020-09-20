let createBranchButton = document.getElementById("criar-tarefa");
let inputBranch = document.getElementById("texto-tarefa");
let listBranch = document.getElementById("lista-tarefas");

createBranchButton.addEventListener("click", function() {
    if (!(inputBranch.value === "")) {;
        let litag = document.createElement("li");
        litag.innerText = inputBranch.value;
        listBranch.appendChild(litag);
        inputBranch = "";
    } else {
        alert("Adicione um item da tarefa!")
    }
    inputBranch.focus();
});