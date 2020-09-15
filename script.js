// Botão para adicionar uma nova tarefa
buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener("click", criarItem);

// Função que adiciona o item e limpa o input
function criarItem() {
    let inputTexto = document.getElementById("texto-tarefa");
    if (inputTexto.value != "") {
        let novoItem = document.createElement("li");
        novoItem.innerText = inputTexto.value;
        novoItem.addEventListener("click", selecionaItem); // Já cria o elemento com um Event Listener de seleção
        novoItem.addEventListener("dblclick", completaItem); // Já cria o elemento com um Event Listener para completar
        let listaTarefas = document.getElementById("lista-tarefas");
        listaTarefas.appendChild(novoItem);
        inputTexto.value = "";
    }
}

// Função que seleciona o item clicado
function selecionaItem() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado == null) {
        this.setAttribute("id", "selected");
    } else {
        itemSelecionado.removeAttribute("id", "selected");
        this.setAttribute("id", "selected");
    }
}

let buttonLimpaSelecao = document.getElementById("limpa-selecao");
buttonLimpaSelecao.addEventListener("click", limpaSelecao);

// Função que tira a seleção de todos os itens
function limpaSelecao() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado != null) {
        itemSelecionado.removeAttribute("id", "selected");
    }
}
// Função que marca como item completado
function completaItem() {
    if (this.classList[0] == "completed") {
        this.classList.remove("completed")
    } else {
        this.classList.add("completed");
    }
}

let buttonApagaTudo = document.getElementById("apaga-tudo");
buttonApagaTudo.addEventListener("click", apagaTudo);

// Função que limpa todos os itens
function apagaTudo() {
    let todosItems = document.getElementsByTagName("ol");
    // Utilizei o while que encontrei no link: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (todosItems[0].firstChild) {
        todosItems[0].removeChild(todosItems[0].lastChild);
    }
}