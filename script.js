const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const outList = document.getElementById("lista-tarefas");

buttonAdd.addEventListener("click", function () {
  if (!inputText.value == "") {
    let liElement = document.createElement("li");
    liElement.innerText = inputText.value;
    outList.appendChild(liElement);
    inputText.value = "";
  } else {
    alert("campo de texto vazio");
  }
  inputText.focus();
});

outList.addEventListener("click", function (event) {
  let selectedClass = document.querySelector(".selected");
  if (selectedClass != null) {
    selectedClass.classList.remove("selected");
  }

  event.target.classList.add("selected");
});

outList.addEventListener('dblclick', function(event) {
  let selectedClass = document.querySelector(".line-through");
  if (selectedClass != null) {
    selectedClass.classList.remove("line-through");
  }
  event.target.classList.add('line-through')

})
