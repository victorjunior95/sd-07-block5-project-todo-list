const addTarefa = document.querySelector('#criar-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');
const limparList = document.querySelector('#apaga-tudo');
const removeCompleted = document.querySelector('#remover-finalizados');

function tSelect(a) {
  const newTarefa = a
  newTarefa.addEventListener('click', function (select) {
    const color = newTarefa.style.backgroundColor;
    if (color === 'rgb(128, 128, 128)') {
      newTarefa.style.backgroundColor = null;
    } else {
      const tSelected = document.querySelector('.t-selected');
      select.target.className += ' t-selected';
      if (tSelected) {
        tSelected.classList.remove('t-selected');
      }
    }
  });
}

function tComplete(a) {
  const newTarefa = a
  newTarefa.addEventListener('dblclick', function (select) {
    const decor = newTarefa.style.textDecoration;
    if (decor === 'ine-through solid rgb(0, 0, 0)') {
      tSelected.classList.remove('completed');
    } else {
      select.target.className += ' completed';
    }
  });
}

addTarefa.addEventListener('click', function () {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  const newTarefa = document.createElement('li');
  if (tarefaInput){
    newTarefa.setAttribute('class', 'tarefa');
    newTarefa.innerHTML = tarefaInput;
    tarefaList.appendChild(newTarefa);
    document.querySelector('#texto-tarefa').value = '';
  }
  tSelect(newTarefa);
  tComplete(newTarefa);
});

limparList.addEventListener('click', function () {
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
})

removeCompleted.addEventListener('click', function () {
  document.querySelectorAll('.completed').forEach(function(completed) {
    completed.remove();
  });
});

/* function removeCompleted() { !OUTRA FORMA DE ELIMINAR POR CLASS!
  const completedArray = document.getElementsByClassName("completed");
  while (completedArray.length > 0) elements[0].remove();
} */
