// 1)Define the variables:

let header = document.getElementsByTagName('header')[0];
let explanation = document.getElementById('funcionamento');
let textBox = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let button = document.getElementById('criar-tarefa');
let selection = document.querySelector('.selected');

// 2) Define the functions:

// To write the text in the list:
button.addEventListener('click', function (event) {
  event.preventDefault(); // To prevent the form's request
  if (textBox.value !== "") {
    let newTask = document.createElement('li');
    newTask.innerText = textBox.value;
    list.appendChild(newTask);
    selectItem(newTask);
    textBox.value = '';
  }
  else {
    alert("Error! Please, enter a valid text")
  }
});

// To change the item's color:
function selectItem (item) {  
  item.addEventListener('click', function() {
    for (let i = 0; i < list.length; i += 1) {
      list[i].classList.remove('selected')
    }
    item.classList.toggle('selected');
  });
}
