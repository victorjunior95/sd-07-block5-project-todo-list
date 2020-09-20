let inputLista = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let bttCriarTarefa = document.getElementById("criar-tarefa");

bttCriarTarefa.addEventListener('click', function() {
    // testar se o input tem conteudo
    // criar a lista(li)
    // colocar o conteudo na lista
    //  add a li como filha da ol
    // apagar o input
    // voltar o foco ao input

    if (inputLista.value) {

    let item = document.createElement('li');

        item.innerText = inputLista.value;

        listaTarefas.appendChild(item);

        inputLista.value = '';

    }

    inputLista.focus();
});