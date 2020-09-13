document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li');
  document.querySelector('ol').appendChild(newTask);
  newTask.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';
});

document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const onlyOl = document.querySelector('ol');
  while (onlyOl.firstChild) { // para remover todos os li
    onlyOl.removeChild(onlyOl.firstChild);
  };
})