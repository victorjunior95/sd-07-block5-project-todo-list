const criarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
let li = document.createElement('li');
let listaTarefas = document.querySelector("#lista-tarefas");
let colorselect = document.querySelector('#lista-tarefas').childNodes;
function InputTextField () {
    textoTarefa.addEventListener('keydown', () => {
        textoTarefa = document.querySelector("#texto-tarefa");
    })
}

function listTask () {
    criarTarefa.addEventListener('click', () => {
        listaTarefas = document.querySelector("#lista-tarefas");
        li = document.createElement('li');
        li.innerHTML = textoTarefa.value;
        listaTarefas.appendChild(li);
        textoTarefa.value = '';
        li.id ='list'
        li.className = 'selected';
        li.addEventListener('click', colorListSelect);
        li.addEventListener('dblclick', elementoSelecionadoNaLista)
    })
}

function elementoSelecionadoNaLista (event) {
    const tarefaCompleta = event.target;
    if (tarefaCompleta.classList.contains('completed')) {
        tarefaCompleta.classList.remove('completed');
    } else {
        tarefaCompleta.classList.add('completed');
    }      
}


//Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

//Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128)
function colorListSelect (event) {
    const tarefaColorirElemento = event.target;
    const removeCorDeOutrosElementos = document.querySelector("li");
    for (let i = 0; i < removeCorDeOutrosElementos.length; i++) {
        removeCorDeOutrosElementos[i].classList.remove("seleted");
    }
    tarefaColorirElemento.classList.add("seleted");  
}

function apagarTudo() {
    const todasLi = document.querySelector("#lista-tarefas");
    while (todasLi.firstChild) {
        todasLi.removeChild(todasLi.firstChild);
    }
}

const botaoApagarTudo = document.querySelector("#apaga-tudo");
botaoApagarTudo.addEventListener("click", apagarTudo);
/*
//Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
const removerSelecionado = document.querySelector("#remover-selecionado");
function removecolorListSelect () {
    removerSelecionado.addEventListener("click", () => {
        li.remove();
    });
}
*/
//id `remover-finalizados` elementos completos


/*//apagar tudo
function func () {
    listaTarefas.innerHTML = "";   
}

function apagarTudo () {
    const apague = document.querySelector("#apaga-tudo");
    apague.addEventListener('click', () => {
        const killLi = func();
    })
}
*/
window.onload = () => {
    InputTextField ()
    listTask ()
}