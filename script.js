const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const deletarTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefa = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionato');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');


criarTarefa.addEventListener('click', addTarefa = () => {
    const li = document.createElement('li');
    li.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(li);
});