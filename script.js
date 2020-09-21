let botao1 = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let vetorLista = lista.getElementsByTagName('li');

function criarTarefa() {
    let item = document.createElement('li');
    item.innerText = caixaTexto.value;
    lista.appendChild(item);
    caixaTexto.value = '';
    item.addEventListener("click", function() {mudarCor(item);});
    //item.addEventListener("click", function() {tiraCor(item);});
    item.addEventListener("dblclick", function() {riscaItem(item);});
}

function mudarCor(item) {
    item.style.backgroundColor = "gray";
}

function tiraCor(item) {
    if(item.style.backgroundColor === "gray")  item.style.backgroundColor = "white";
}

function riscaItem(item) {
    if(item.style.textDecoration === "none") {
        item.style.textDecoration = "line-through";
    }
    else {
        item.style.textDecoration = "none";
    } 
}


botao1.addEventListener("click", criarTarefa);