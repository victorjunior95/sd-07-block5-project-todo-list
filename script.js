// 1)Define the variables:

let header = document.getElementsByTagName('header')[0];
let explanation = document.getElementById('funcionamento');
let textBox = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let button = document.getElementById('criar-tarefa');

// 2) Define the functions:

// To write the text in the list:
button.addEventListener('click', function (event) {
  event.preventDefault(); // To prevent the form's request
  if (textBox.value !== "") {
    let newTask = document.createElement('li');
    newTask.innerText = textBox.value;
    list.appendChild(newTask);
    selectItem(newTask);
    doubleSelection(newTask)
    textBox.value = '';
  }
  else {
    alert("Error! Please, enter a valid text")
  }
});

// To select only one item of the list:
function selectItem(item) {
  let li = document.getElementsByTagName('li');
  item.addEventListener('click', function() {
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    item.classList.toggle('selected');
  });
}

// To complete a task using double-click:
function doubleSelection(item) {
  let li = document.getElementsByTagName('li');
  item.addEventListener('dblclick', function() {
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    item.classList.toggle('completed');
  })
}
