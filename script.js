// handle events

const handleEventsController = (...types) => {
  for (const type of types) {
    switch (type) {
      case 'click':
        controllerEventsClicks(type);
        break;

    }
  }
}

const controllerEventsClicks = (type) => {

  document.addEventListener(type, (event) => {
    const eventData = event.target.dataset.event;
    switch (eventData) {
      case 'btnAddList':
        addList();
        break;
    }
  })
}

const addList = () => {
  const inputText = document.querySelector('#texto-tarefa');
  if (inputText.value) {
    const olLists = document.querySelector('#lista-tarefas');
    olLists.appendChild(createElementList(inputText.value));
    clearTextInput(inputText);
  } else {
    alert('text not exist')
  }
}
const createElementList = (text) => {
  const liElementList = document.createElement('li');
  liElementList.innerText = text;
  return liElementList;
}
const clearTextInput = (Element) => {
  Element.value = '';
}


window.onload = () => {

  handleEventsController('click');


}
