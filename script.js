let textInput = document.getElementById("texto-tarefa");
let addButton = document.getElementById("criar-tarefa");
let ol = document.getElementById("lista-tarefas");

addButton.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerText = textInput.value;
	ol.appendChild(li);
	textInput.value = "";
})



