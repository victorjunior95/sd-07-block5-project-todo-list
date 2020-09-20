let createBranchButton = document.getElementById("criar-tarefa");
let inputBranch = document.getElementById("texto-tarefa");
let listBranch = document.getElementById("lista-tarefas");

createBranchButton.addEventListener("click", function() {
    if (!(inputBranch.value === "")) {;
        let addBranch = document.createElement("li");
        addBranch.innerText = inputBranch.value;
        listBranch.appendChild(addBranch);
        inputBranch.value = "";
    }
    inputBranch.focus();
});

listBranch.addEventListener("click", function (event) {
    const classSelected = document.querySelector(".selected")
    if (classSelected != null) {
        classSelected.classList.remove("selected")
    }
    event.target.classList.add("selected")
})