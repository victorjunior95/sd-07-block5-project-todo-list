const addTarefa = document.querySelector('#criar-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');

addTarefa.addEventListener('click', function () {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  const newTarefa = document.createElement('li');
  newTarefa.innerHTML = tarefaInput;
  tarefaList.appendChild(newTarefa);
  document.querySelector('#texto-tarefa').value = ''
  newTarefa.addEventListener('click', function () {
    const color = newTarefa.style.backgroundColor;
    if (color === 'rgb(128, 128, 128)') {
      newTarefa.style.backgroundColor = null;
    } else {
      newTarefa.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
});
