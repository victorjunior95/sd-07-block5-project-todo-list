let buttonAdd = document.getElementById("criar-tarefa");
buttonAdd = buttonAdd.addEventListener("click", function lista() {
  let inputAdd = document.getElementById("texto-tarefa");
  let listOl = document.getElementById("lista-tarefas");
  let createLi = document.createElement("li");
  createLi.innerText = inputAdd.value;
  listOl.appendChild(createLi);
  inputAdd.value = "";
});

let buttonRemove = document.getElementById("apaga-tudo");
buttonRemove = buttonRemove.addEventListener("click", function remove() {
  let removeLi = document.getElementById("lista-tarefas");
  removeLi.innerHTML = "";
});


let listLi = document.querySelector("#lista-tarefas");
function changeColorJob() {
  listLi.addEventListener("click", function (event) {
    
    let li = event.target;
    let children = listLi.children;
    children = document.querySelector("li").classList.add('selected');
    
    for (let i in children) {
      children[i].style.backgroundColor = "";
    }
    
    li.style.backgroundColor = "rgb(128, 128, 128)";
    
  });
}
changeColorJob();

  // classList.remove("selected")
  // classList.add("selected");