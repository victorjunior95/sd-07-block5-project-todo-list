// 1)Define the variables:

let header = document.getElementsByTagName('header')[0];
let explanation = document.getElementById('funcionamento');
let textBox = document.getElementById('texto-tarefa');
let list = document.getElementsByClassName('list')[0];
let item = document.getElementsByClassName('item')[0];

// 2) Define the functions:

// To show the text of the box in the list:

function writeList () {
  item.innerHTML = textBox.value;
  list.appendChild(item);
}
