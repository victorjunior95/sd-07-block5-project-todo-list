// Add element to the bottom of the list and clear the text input
function addList() {
  //some parts were based on the website examples (https://www.w3schools.com/jsref/met_node_appendchild.asp)
  let clearText = document.getElementById('texto-tarefa');
  let addTask = document.getElementById('lista-tarefas');
  let node = document.createElement("li"); // Create <li> node
  let text = document.createTextNode(clearText.value); // Create Text node
  node.appendChild(text); // Append the text to <li>
  node.classList.add('lista');
  node.addEventListener('click', selected);
  addTask.appendChild(node); // Append <li> to <ol> whit id = 'texto-tarefa'
  clearText.value = '';
}

// function to scroll through the created list
function selected(event) {
  let items = document.querySelector('.selected');
  if (items !== null) {
    items.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
