const btnAdd = document.getElementById('criar-tarefa');
btnAdd.addEventListener('click', function () {
  const getInput = document.getElementById('texto-tarefa').value;
  const listaTarefa = document.getElementById('lista-tarefas');
  const elementeLi = document.createElement('li');
  elementeLi.id = `id${document.getElementById('texto-tarefa').value}`;
  elementeLi.addEventListener('click', function () {
    elementeLi.style.backgroundColor = ' rgb(128, 128, 128)';
  });
  elementeLi.innerHTML = getInput;
  listaTarefa.appendChild(elementeLi);
  document.getElementById('texto-tarefa').value = '';
});

