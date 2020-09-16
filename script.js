const inputTextToDo = document.querySelector(".texto-tarefa");
const buttonCreateToDo = document.querySelector(".criar-tarefa");

function clearInputTextToDo() {
  inputTextToDo.value = '';
}

buttonCreateToDo.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = inputTextToDo.value;
  document.querySelector(".lista-tarefas").appendChild(li);
  clearInputTextToDo();
});
