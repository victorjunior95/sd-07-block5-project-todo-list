const buttonAddTarefa = document.querySelector('#criar-tarefa');

buttonAddTarefa.addEventListener('click', () => {
  const listTarefa = document.querySelector('#lista-tarefas');
  const textoTarefa = document.querySelector('#texto-tarefa');
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  listTarefa.appendChild(tarefa);
  textoTarefa.value = '';
});
