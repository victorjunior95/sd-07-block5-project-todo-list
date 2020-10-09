const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const deletarTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefa = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionato');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');

function clearSelection() {
    const items = document.querySelectorAll('#lista-tarefas li');  
    for (let index = 0; index < items.length; index += 1) {
        items[index].classList.remove('selecionado');
    }
}

const addSelection= (target) => target.classList.add('selecionado');


criarTarefa.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(li);
    textoTarefa.value = '';
});


listaTarefas.addEventListener('click', function (event) {
    if (event.target !== listaTarefas) {
        clearSelection();
        addSelection(event.target);
    }
});
