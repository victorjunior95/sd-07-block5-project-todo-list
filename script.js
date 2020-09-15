let buttonToAdd = document.getElementById("criar-tarefa")
let orderedListElement = document.getElementById("lista-tarefas")
let array = [];

buttonToAdd.addEventListener('click', function () {

  let textTasks = document.getElementById("texto-tarefa");
  array.push(textTasks.value);
  let elementLi = document.createElement("li")
  elementLi.className = "tarefa";

  elementLi.addEventListener('click', function (event) {
    event.target.style.backgroundColor = "rgb(128,128,128)";
    elementLi.classList.add("selecionada");
  });

  elementLi.addEventListener('dblclick', function(event){
    event.target.classList.add("completed");
  })

  orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
  textTasks.value = "";
})





// for (let index = 0; index < selectedItens.length; index++) {
//   if (index != selectedItens.length) {
//     selectedItens[index].classList.remove("selecionada");
//     selectedItens[index].style.backgroundColor = "rgb(173, 216, 230)"

//   }
// }