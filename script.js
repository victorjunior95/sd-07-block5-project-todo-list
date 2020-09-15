//  fonte: https://github.com/Marxneves/Trybe/blob/master/Projetos/to-do-list/script.js
const inputText = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', function () {
  const elementList = document.createElement('li');
  list.appendChild(elementList);
  elementList.innerText = inputText.value;
  inputText.value = '';
});

// list.addEventListener('click', function (event) {
//   const li = event.target;
//   li.style.backgroundColor = 'rgb(128, 128, 128)';
// });

list.addEventListener('click', function (event) {
  const li = event.target;
  for (let index = 0; index < list.childNodes.length; index += 1) {
    if (list.childNodes[index] !== li) {
      list.childNodes[index].style.backgroundColor = 'rgb(255, 195, 230)';
    }
  }
  li.style.backgroundColor = 'rgb(128, 128, 128)';
});
