const inputText = document.querySelector("#texto-tarefa");
const buttonCreateJob = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");

function createJob() {
  buttonCreateJob.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inputText.value;
    list.appendChild(li);
    inputText.value = "";
    // console.log(list);
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

function completedJob() {
  list.addEventListener("dblclick", function (event) {
    let li = event.target;
    if (li.classList.contains("completed")) {
      li.classList.remove("completed");
    } else {
      li.classList.add("completed");
      // console.log(li.classList);
    }
  });
}
completedJob();

const buttonRemoveJob = document.querySelector("#apaga-tudo");

function removeJob() {
  buttonRemoveJob.addEventListener("click", function () {
    list.innerHTML = "";
  });
}
removeJob();

const buttonRemoveCompletedJob = document.querySelector("#remover-finalizados");

function removeCompletedJob() {
  buttonRemoveCompletedJob.addEventListener("click", function () {
    let li = document.getElementsByClassName("completed");
    for (let i = li.length - 1; i >= 0; i -= 1) {
      list.removeChild(li[i]);
      // console.log(li.length);
    }
  });
}
removeCompletedJob();

// const buttonSaveJob = document.querySelector("#salvar-tarefas");

// function saveJob() {
//   buttonSaveJob.addEventListener("click", function () {
//     localStorage.setItem("list", list);
//   });
// }
// saveJob();

// function currentSaveList () {
//   list = localStorage.getItem("list");
// }
// currentSaveList();
