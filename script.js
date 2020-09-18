let textInput = document.getElementById('texto-tarefa'),
  taskList = document.getElementById('lista-tarefas'),
  clearBtn = document.getElementById('remover-finalizados'),
  addBtn = document.getElementById("criar-tarefa"),
  rmvBtn = document.getElementById('apaga-tudo'),
  lastElementSelected;

function createItem() {

  let element = taskList,
    text = textInput.value;
  textInput.value = "";

  if (text == "") {

    textInput.className = "errorClass";

  }
  else {

    let item = document.createElement('li');
    item.innerHTML = text;
    item.addEventListener("click", getClickItem);
    element.appendChild(item);

    textInput.className = "inputClass";

  };
};

function deleteList() { 

  let list = taskList.querySelectorAll('li');;

  for (let i = 0 ; i < list.length ; i++) {

    taskList.removeChild(list[i]);

  };

};

function clearList() {

  let list = taskList.querySelectorAll('.completed');

  for ( let i = 0 ; i < list.length ; i++ ) {

    if (list[i].className === 'completed') {

      taskList.removeChild(list[i]);

    };

  };

 };

function itemSelected(element) {

  let item = element;

  if (lastElementSelected == null) {
    console.log(`null ${item.target.className}`);



  }
  else if (item.target.className === 'selected') {
    console.log(`defalt ${item.target.className}`);


  }
  else { console.log('WTF'); };

};

function getClickItem(element) {

  let elementClass = element.target.className,
    item = element;

  switch (elementClass) {

    case '':
      lastElementSelected = item,
        item.target.className = 'selected';
      break

    case 'selected':
      lastElementSelected.target.className = '';
      lastElementSelected = item;
      item.target.className = 'completed';
      break;

    case 'completed':
      item.target.className = '';
      console.log(`completed ${item.target.className}`);
      break;

    default: itemSelected(item);

  };


};

function createEvents() {

  addBtn.addEventListener("click", createItem);

  rmvBtn.addEventListener("click", deleteList);

  clearBtn.addEventListener("click", clearList);

};

window.addEventListener('DOMContentLoaded', () => {

  createEvents();

});