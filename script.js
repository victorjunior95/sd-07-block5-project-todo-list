document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li'); // criando li
  document.querySelector('ol').appendChild(newTask); // linkando o li ao ol
  newTask.innerText = document.querySelector('input').value; // escrevendo no li
  document.querySelector('input').value = ''; // limpando o input

  newTask.addEventListener('click', function () {
    newTask.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  newTask.addEventListener('dblclick', function () {
    if (newTask.classList.contains('completed')) { // saber se contém a classe especificada
      newTask.classList.remove('completed'); // se sim, remove
    } else {
      newTask.classList.add('completed'); // se não, adiciona
    }
  });
});

document.querySelector('#remover-finalizados').addEventListener('click', function () {
  while (document.querySelector('.completed')) {
    document.querySelector('ol').removeChild(document.querySelector('.completed'));
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const onlyOl = document.querySelector('ol');
  while (onlyOl.firstChild) { // para remover todos os li
    onlyOl.removeChild(onlyOl.firstChild);
  }
});
