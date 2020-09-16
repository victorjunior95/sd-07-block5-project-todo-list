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

orderList.addEventListener("click" , function(event){
    let anterior = document.querySelector(".selecionado");
    if(anterior != null){
        anterior.classList.remove("selecionado");
    }
    let register = event.target;
    register.classList.add("selecionado")
    
});
orderList.addEventListener('dblclick', function (event) {
    let register = event.target;
    if(register.classList.contains("completed")){
        register.classList.add("notCompleted");
    } else {
        register.classList.add("completed"); 
    }
});