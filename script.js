//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');

//  Functions
function elementCreator() {
    let element = document.createElement('li')
    element.innerText = inputTextTask.value;
    return element;
}

function addTaskToList() {
    console.log(inputTextTask.value);
    orderedListTasks.appendChild(elementCreator());
}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);

//  Última linha
