// Add element to the bottom of the list and clear the text input
function addList() {
  //some parts were based on the website examples (https://www.w3schools.com/jsref/met_node_appendchild.asp)
  let clearText = document.getElementById('texto-tarefa');
  let addTask = document.getElementById('lista-tarefas');
  let node = document.createElement("li"); // Create <li> node
  let text = document.createTextNode(clearText.value); // Create Text node
  node.appendChild(text); // Append the text to <li>
  node.classList.add('lista');
  node.addEventListener('click', selected); // Add click event
  node.addEventListener('dblclick', dbclicked); // Add double click event
  addTask.appendChild(node); // Append <li> to <ol> whit id = 'texto-tarefa'
  clearText.value = '';
}

// function to select an item that was clicked and show a background color
function selected(event) {
  let items = document.querySelector('.selected');
  if (items !== null) {
    items.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
// function to select an item that was double clicked and show a line through
function dbclicked(event) {
  let items = event.target.classList.contains('dbclicked');
  if (items === true) {
    event.target.classList.remove('dbclicked');
  } else {
    event.target.classList.add('dbclicked');
  }
}

// function clear list
function clearAll() {
  let father = document.getElementById('lista-tarefas');
  while (father.lastChild !== null) {
    father.removeChild(father.lastElementChild);
  }
}

// function clear all done
function clearAllDone() {
  let father = document.getElementById('lista-tarefas');
  let itemsCompleted = document.querySelectorAll('.dbclicked');
  while (itemsCompleted !== null) {
    console.log(itemsCompleted);
    console.log('---');
    father.removeChild(itemsCompleted[0]);
  }
}