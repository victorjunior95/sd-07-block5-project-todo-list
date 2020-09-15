let buttonAdd = document.getElementById('criar-tarefa');
buttonAdd = buttonAdd.addEventListener("click", function lista() {
let inputAdd = document.getElementById('texto-tarefa');
let listOl = document.getElementById('lista-tarefas');
let createLi = document.createElement('li');
createLi.innerText = inputAdd.value;
listOl.appendChild(createLi);
inputAdd.value='';

})
