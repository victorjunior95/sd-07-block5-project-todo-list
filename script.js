document.querySelector('#criar-tarefa').addEventListener('click', function newList() {
  let newLi = document.createElement('li');
  document.querySelector('ol').appendChild(newLi);
  newLi.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';

  newLi.addEventListener('click', function () {
    let selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    }
    newLi.classList.add('selected');
    })

  newLi.addEventListener('dblclick', function() {
    newLi.classList.toggle('completed');
  });
});


document.querySelector('#apaga-tudo').addEventListener('click', function deleteList() {
  let deleteOl = document.querySelector('#lista-tarefas');
  deleteOl.innerHTML = '';
});


document.querySelector('#remover-finalizados').addEventListener('click', function deleteCompleted() {
  let deleteLi = document.querySelector('#lista-tarefas');
  let completedLi = document.querySelectorAll('.completed');
    for (let index in completedLi) {
      deleteLi.removeChild(completedLi[index]);
    }
  });







