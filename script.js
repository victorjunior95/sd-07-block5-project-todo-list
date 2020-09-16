let btCreate = document.getElementById("criar-tarefa");
let inpuText = document.getElementById("texto-tarefa");
let orderList = document.getElementById("lista-tarefas");

btCreate.addEventListener("click", function(){
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(inpuText.value);  // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    orderList.appendChild(node);
    node.classList.add('item-list')
    inpuText.value =' ';
    
});


/*li.addEventListener('dblclick', function () {
    lineThrough = document.querySelector('.item-list');
      if (li.classList.contains('item-list')) {
        li.classList.remove('item-list')
      }
      else {
        li.classList.add('item-list');
    }
});*/