const botaoApagarLista = document.querySelector("#apaga-tudo");
const botaoRemoverSelecionado = document.querySelector("#remover-selecionado");
const buttoncriarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
var listOl = document.querySelector('ol');
let li = document.createElement('li');
let listaTarefas = document.querySelector("#lista-tarefas");

function InputTextField () {
    textoTarefa.addEventListener('keydown', () => {
        textoTarefa = document.querySelector("#texto-tarefa");
    })
}

function listTask () {
    buttoncriarTarefa.addEventListener('click', () => {
        listaTarefas = document.querySelector("#lista-tarefas");
        li = document.createElement('li');
        li.innerHTML = textoTarefa.value;
        listaTarefas.appendChild(li);
        textoTarefa.value = '';
        li.id ='list'
    })
}

function eventosDaLista () {
    listOl.addEventListener('dblclick', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
      }
    });
    listOl.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('selected');
        }
    });
}

botaoRemoverSelecionado.addEventListener('click', apagarSelecionado);
function apagarSelecionado () {
    const selecionado = document.querySelectorAll(".selected");
    for (let index = 0; index < selecionado.length; index += 1) {
        selecionado[index].remove();
    }
}

botaoApagarLista.addEventListener("click", apagarTudo);
function apagarTudo() {
    const todasLi = document.querySelector("#lista-tarefas");
    while (todasLi.firstChild) {
        todasLi.removeChild(todasLi.firstChild);
    }
}



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


window.onload = () => {
    InputTextField ()
    eventosDaLista ()
    listTask ()
}