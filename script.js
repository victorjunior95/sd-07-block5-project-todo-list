let botao1 = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

function criarTarefa() {
    let item = document.createElement('li');
    item.innerText = caixaTexto.value;
    lista.appendChild(item);
    caixaTexto.value = '';
}

botao1.addEventListener("click", criarTarefa);