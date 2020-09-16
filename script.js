let buttonAdd = document.getElementById("criar-tarefa");
buttonAdd = buttonAdd.addEventListener("click", function lista() {
  let inputAdd = document.getElementById("texto-tarefa");
  let listOl = document.getElementById("lista-tarefas");
  let createLi = document.createElement("li");
  createLi.innerText = inputAdd.value;
  listOl.appendChild(createLi);
  inputAdd.value = "";
});
const listLi = document.querySelector("#lista-tarefas");
let buttonRemove = document.getElementById("apaga-tudo");
buttonRemove = buttonRemove.addEventListener("click", function remove() {
  let removeLi = document.getElementById("lista-tarefas");
  removeLi.innerHTML = "";
});

function clickAndChangeColor() {
  listLi.addEventListener("click", function (event) {
    let li = event.target;
    let children = listLi.children;
    children = document.querySelector("li").classList.add("selected");

    for (let i = 0; i < children; i += 1) {
      children = children[i];
    }

    li.style.backgroundColor = "rgb(128, 128, 128)";
  });
}
clickAndChangeColor();

function doubleClick() {
  listLi.addEventListener("dblclick", function (e) {
    let li = event.target;
    let children = listLi.children;
    children = document.querySelector("li").classList.remove("selected");
    li.style.backgroundColor = "";
  });
}
doubleClick();

// classList.remove("")
// classList.add("");
