// Botão para adicionar uma nova tarefa
buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener("click", criarItem);

let buttonlimpaSelecao = document.getElementById("remover-selecionado");
buttonlimpaSelecao.addEventListener("click", limpaSelecao);

// Função que adiciona o item e limpa o input
function criarItem() {
    let inputTexto = document.getElementById("texto-tarefa");
    if (inputTexto.value != "") {
        let novoItem = document.createElement("li");
        novoItem.innerText = inputTexto.value;
        novoItem.addEventListener("click", selecionaItem); // Já cria o elemento com um Event Listener
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

// Função que tira a seleção de todos os itens
function limpaSelecao() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado != null) {
        itemSelecionado.removeAttribute("id", "selected");
    }
}