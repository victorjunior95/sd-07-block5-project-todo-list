let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener("click", function() {
    let inputTarefa = document.getElementById('texto-tarefa').value;
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = inputTarefa;
    document.getElementById('lista-tarefas').appendChild(novaTarefa);
    document.getElementById('texto-tarefa').value = '';
    novaTarefa.addEventListener("click", function() {
        document.querySelectorAll('li').forEach(makeBackgroundColorWhite);
        novaTarefa.style.backgroundColor = "rgb(128, 128, 128)";
    });
    novaTarefa.addEventListener("dblclick", function(){
        if (novaTarefa.classList.contains('completed')){
            novaTarefa.classList.remove('completed');
        }
        else {
            novaTarefa.classList.add('completed');
        }
    })
});

let botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener("click", function() {
    document.getElementById('lista-tarefas').innerHTML = '';
});

function makeBackgroundColorWhite(item) {
    item.style.backgroundColor = "white";
}

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
botaoRemoverFinalizados.addEventListener("click", function() {
    document.querySelectorAll('.completed').forEach(function(item) {
        item.remove();
    })
})

let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener("click", function() {
    localStorage.clear();
    let listaDeTarefas = document.getElementById('lista-tarefas');
    localStorage.setItem("lista de tarefas", listaDeTarefas.innerHTML);
});  

window.onload = mostrarListaSalva;
function mostrarListaSalva() {
    document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('lista de tarefas');
}