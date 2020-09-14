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
    })
}

//### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
//- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`


//Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

//Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128)
function colorListSelect () {
    for (let i = 0; i < colorselect.length; i++) {
        colorselect[i].onclick = function () {
            colorselect[i].style.backgroundColor = 'rgb(128, 128, 128)'
        }
    }        
}


//Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
const removerSelecionado = document.querySelector("#remover-selecionado");
function removecolorListSelect () {
    removerSelecionado.addEventListener("click", () => {
        li.remove();
    });
}

//id `remover-finalizados` elementos completos


//apagar tudo
function func () {
    listaTarefas.innerHTML = "";   
}

function apagarTudo () {
    const apague = document.querySelector("#apaga-tudo");
    apague.addEventListener('click', () => {
        const killLi = func();
    })
}

window.onload = () => {
    InputTextField ()
    listTask ()
    apagarTudo ()
    colorListSelect ()
    removecolorListSelect ()
}