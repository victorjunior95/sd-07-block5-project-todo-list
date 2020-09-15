document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li'); // criando li
  document.querySelector('ol').appendChild(newTask); // linkando o li ao ol
  newTask.innerText = document.querySelector('input').value; // escrevendo no li
  document.querySelector('input').value = ''; // limpando o input
// para pintar de cinza o selecionado
  newTask.addEventListener('click', function () {
    const isGray = document.querySelector('.gray'); // pega o que tiver com o gray
    if (isGray) { // saber se existe alguma li com o gray
      isGray.classList.remove('gray'); // remove se tiver
    }
    newTask.classList.add('gray'); // se não, adiciona
  });
// para riscar o completado
  newTask.addEventListener('dblclick', function () {
    if (newTask.classList.contains('completed')) { // saber se contém a classe especificada
      newTask.classList.remove('completed'); // se sim, remove
    } else {
      newTask.classList.add('completed'); // se não, adiciona
    }
  });
});
// para salvar todas as li no localStorage
document.querySelector('#salvar-tarefas').addEventListener('click', function () {
  localStorage.clear(); // limpa o que tiver salvo para receber lista nova
  const allTasks = document.querySelector('ol'); // todas as li novas a partir do pai
    localStorage.setItem('Task', allTasks.innerHTML);
});

window.onload = refresh;
function refresh() {
  document.querySelector('ol').innerHTML = localStorage.getItem('Task');
}

// para remover o completado
document.querySelector('#remover-finalizados').addEventListener('click', function () {
  while (document.querySelector('.completed')) { // remove só os completed
    document.querySelector('ol').removeChild(document.querySelector('.completed'));
  }
});
// para remover o selecionado
document.querySelector('#remover-selecionado').addEventListener('click', function () {
  while (document.querySelector('.gray')) { // remove só o selecionado
    document.querySelector('ol').removeChild(document.querySelector('.gray'));
  }
});
// para remover a lista toda
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  while (document.querySelector('ol').firstChild) { // para remover todos os li
    document.querySelector('ol').removeChild(document.querySelector('ol').firstChild);
  }
});
