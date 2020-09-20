function addItemLista() {
    let lista = document.getElementById("lista-tarefas");
    let novoItem = document.createElement("li");
    let textoNovoItem = document.getElementById("texto-tarefa").value;
    novoItem.innerText = textoNovoItem;
    lista.appendChild(novoItem);
    document.getElementById("texto-tarefa").value = "";
  }