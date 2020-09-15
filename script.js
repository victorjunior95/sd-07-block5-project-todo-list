const inputText = document.querySelector("#texto-tarefa");
const buttonCreateJob = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");

function createJob() {
  buttonCreateJob.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inputText.value;
    list.appendChild(li);
    inputText.value = "";
  });
}
createJob();

function changeColorJob() {
  list.addEventListener("click", function (event) {
    let li = event.target;
    let children = list.children;
    for (let i = 0; i < children.length; i += 1) {
      children[i].style.backgroundColor = "";
    }
    li.style.backgroundColor = "rgb(128, 128, 128)";
  });
}
changeColorJob();
