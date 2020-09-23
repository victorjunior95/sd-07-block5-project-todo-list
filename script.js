let btnCriarTarefa = document.getElementById('criar-tarefa');

btnCriarTarefa.addEventListener('click', function () {
  let listaTarefas = document.getElementById('lista-tarefas');
  let intemLista = document.createElement('li');
  let textoTarefa = document.getElementById('texto-tarefa');
  intemLista.innerText = textoTarefa.value;
  listaTarefas.appendChild(intemLista);
  textoTarefa.value = '';
});
