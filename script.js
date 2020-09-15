document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li'); // criando li
  document.querySelector('ol').appendChild(newTask); // linkando o li ao ol
  newTask.innerText = document.querySelector('input').value; // escrevendo no li
  document.querySelector('input').value = ''; // limpando o input
// para pintar de cinza o selecionado
  newTask.addEventListener('click', function () {
    const isGray = document.querySelector('.selected'); // pega o que tiver com o gray
    if (isGray) { // saber se existe alguma li com o gray
      isGray.classList.remove('selected'); // remove se tiver
    }
    newTask.classList.add('selected'); // se não, adiciona
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
// quando a página for atualizada, ele vai trazer a lista que estiver salva no localStorage
function refresh() {
  document.querySelector('ol').innerHTML = localStorage.getItem('Task');
}
window.onload = refresh;

// para remover o completado
document.querySelector('#remover-finalizados').addEventListener('click', function () {
  while (document.querySelector('.completed')) { // remove só os completed
    document.querySelector('ol').removeChild(document.querySelector('.completed'));
  }
});
// para remover a lista toda
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  while (document.querySelector('ol').firstChild) { // para remover todos os li
    document.querySelector('ol').removeChild(document.querySelector('ol').firstChild);
  }
});
// para mover para cima
document.querySelector('#mover-cima').addEventListener('click', function () {
  const arrayLi = document.querySelectorAll('li');
  if (arrayLi.length === 0 || arrayLi.length === 1 || arrayLi[0].className === 'selected') {
    alert('Não é possível para para cima');
  }
  for (let i = 1; i < arrayLi.length; i += 1) {
    const itemGray = arrayLi[i].innerHTML;
    const toChange = arrayLi[i - 1].innerHTML;
    if (arrayLi[i].className === 'selected') {
      arrayLi[i].innerHTML = toChange;
      arrayLi[i - 1].innerHTML = itemGray;
      arrayLi[i].classList.remove('selected');
      arrayLi[i - 1].classList.add('selected');
    }
  }
});
// para remover o selecionado
document.querySelector('#remover-selecionado').addEventListener('click', function () {
  while (document.querySelector('.selected')) { // remove só o selecionado
    document.querySelector('ol').removeChild(document.querySelector('.selected'));
  }
});
