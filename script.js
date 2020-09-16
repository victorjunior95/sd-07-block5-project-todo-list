let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener("click", function() {
    let inputTarefa = document.getElementById('texto-tarefa').value;
    criaTarefa(inputTarefa);
});

function criaTarefa(inputTarefa) {
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = inputTarefa;
    document.getElementById('lista-tarefas').appendChild(novaTarefa);
    document.getElementById('texto-tarefa').value = '';
    novaTarefa.addEventListener("click", function() {
        document.querySelectorAll('li').forEach(removeClassSelected);
        novaTarefa.classList.add('selected');
    });
    novaTarefa.addEventListener("dblclick", function(){
        if (novaTarefa.classList.contains('completed')){
            novaTarefa.classList.remove('completed');
        }
        else {
            novaTarefa.classList.add('completed');
        }
    });
}

let botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener("click", function() {
    document.getElementById('lista-tarefas').innerHTML = '';
});

function removeClassSelected(item) {
    item.classList.remove('selected');
}

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
botaoRemoverFinalizados.addEventListener("click", function() {
    document.querySelectorAll('.completed').forEach(function(item) {
        item.remove();
    });
});  

//function retornaListaASalvar() {
//    let listaASalvar = [];
//    document.querySelectorAll('li').forEach(function(item) {
//        listaASalvar.push(criaTarefa(item));
//    });
//    return listaASalvar;
//}

let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener("click", function() {
    localStorage.clear();
    //let listaDeTarefas = retornaListaASalvar();
    let listaDeTarefas = document.getElementById('lista-tarefas');
    localStorage.setItem("lista de tarefas", listaDeTarefas.innerHTML);
});

window.onload = mostrarListaSalva;
function mostrarListaSalva() {
    let listaSalva = localStorage.getItem('lista de tarefas');
    if (listaSalva.length != 0) {
        document.getElementById('lista-tarefas').innerHTML = listaSalva;
    }
}

let botaoRemoverSelecionado = document.getElementById('remover-selecionado');
botaoRemoverSelecionado.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected');
    itemSelecionado.remove();
});

let botaoMoverParaCima = document.getElementById('mover-cima');
botaoMoverParaCima.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected')
    let listaDeTarefas = document.getElementById('lista-tarefas');
    listaDeTarefas.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
});

let botaoMoverParaBaixo = document.getElementById('mover-baixo');
botaoMoverParaBaixo.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected')
    let listaDeTarefas = document.getElementById('lista-tarefas');
    listaDeTarefas.insertBefore(itemSelecionado.previousElementSibling, itemSelecionado);
});