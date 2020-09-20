function addItemLista() {
    let lista = document.getElementById("lista-tarefas");
    let novoItem = document.createElement("li");
    let textoNovoItem = document.getElementById("texto-tarefa").value;
    novoItem.innerText = textoNovoItem;
    novoItem.className = "item";
    lista.appendChild(novoItem);
    document.getElementById("texto-tarefa").value = "";
  }
  function deleteAllItems(){
    let lista = document.getElementById("lista-tarefas");
    let itensLista = document.querySelectorAll("li");
    for (let count = 0; count < itensLista.length; count+=1){
        lista.removeChild(itensLista[count]);
    }   
  }


  document.addEventListener("click", function(event){
      if (event.target.className == "item")
        if (event.target.style.backgroundColor != "rgb(128, 128, 128)")
             event.target.style.backgroundColor = "rgb(128, 128, 128)";
        else
            event.target.style.backgroundColor = "rgb(255, 255, 255)";
  })