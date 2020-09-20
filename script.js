function addItemLista() {
    let lista = document.getElementById("lista-tarefas");
    let novoItem = document.createElement("li");
    let textoNovoItem = document.getElementById("texto-tarefa").value;
    novoItem.innerText = textoNovoItem;
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