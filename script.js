document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li'); // criando li
  document.querySelector('ol').appendChild(newTask); // linkando o li ao ol
  newTask.innerText = document.querySelector('input').value; // escrevendo no li
  document.querySelector('input').value = ''; // limpando o input

  newTask.addEventListener('click', function () {
    const isGray = document.querySelector('.gray'); // pega o que tiver com o gray
    if (isGray) { // saber se existe alguma li com o gray
      isGray.classList.remove('gray'); // remove se tiver
    }
    newTask.classList.add('gray'); // se não, adiciona
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
  while (document.querySelector('.completed')) { // remove só os completed
    document.querySelector('ol').removeChild(document.querySelector('.completed'));
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const onlyOl = document.querySelector('ol');
  while (onlyOl.firstChild) { // para remover todos os li
    onlyOl.removeChild(onlyOl.firstChild);
  }
});
