document.getElementById("criar-tarefa").addEventListener("click", function () {
  let inputText = document.getElementById("texto-tarefa").value;
  let itemList = document.createElement("li");
  itemList.className = "listado";
  itemList.innerHTML = inputText;
  document.getElementById("lista-tarefas").appendChild(itemList);
  document.getElementById("texto-tarefa").value = "";
});

document.getElementById("apaga-tudo").addEventListener("click", function () {
  document.getElementById("lista-tarefas").innerHTML = "";
});
