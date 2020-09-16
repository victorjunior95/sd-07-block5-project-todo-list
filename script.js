const inputTextToDo = document.querySelector(".texto-tarefa");
const buttonCreateToDo = document.querySelector(".criar-tarefa");
let olToDoList = document.querySelector(".lista-tarefas");

function clearInputTextToDo() {
  inputTextToDo.value = "";
}

buttonCreateToDo.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = inputTextToDo.value;
  olToDoList.appendChild(li);
  clearInputTextToDo();
  olToDoList.addEventListener("click", changeBGColorListItem);
});

function changeBGColorListItem(event) {
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    olToDoList.children[index].addEventListener("click", function (event) {
      for (let j = 0; j < olToDoList.childElementCount; j += 1) {
        if (olToDoList.children[j] !== event.target) {
          olToDoList.children[j].style.backgroundColor = "";
        }
      }
      event.target.style.backgroundColor = "rgb(128, 128, 128)";
    });
  }
}
