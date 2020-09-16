document.querySelector('#criar-tarefa').addEventListener('click', function newList() {
  let newLi = document.createElement('li');
  document.querySelector('ol').appendChild(newLi);
  newLi.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';
});

