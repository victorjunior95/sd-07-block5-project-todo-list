let buttonAdd = document.getElementById("criar-tarefa");
buttonAdd = buttonAdd.addEventListener("click", function lista() {
  let inputAdd = document.getElementById("texto-tarefa");
  let listOl = document.getElementById("lista-tarefas");
  let createLi = document.createElement("li");
  createLi.innerText = inputAdd.value;
  listOl.appendChild(createLi);
  inputAdd.value = "";
  createLi.setAttribute('class', 'newLi');
  let paintLi = document.querySelector('.newLi');
  
});

let buttonRemove = document.getElementById("apaga-tudo");
buttonRemove = buttonRemove.addEventListener("click", function remove() {
  let removeLi = document.getElementById("lista-tarefas");
  removeLi.innerHTML = "";
});



