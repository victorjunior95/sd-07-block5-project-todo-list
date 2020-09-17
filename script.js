let textInput = document.getElementById("texto-tarefa");
let addButton = document.getElementById("criar-tarefa");
let ol = document.getElementById("lista-tarefas");

addButton.addEventListener("click", function() {
	let li = document.createElement("li");
	li.innerText = textInput.value;
	ol.appendChild(li);
	textInput.value = '';

	li.addEventListener("click", function () {
  	if (li.classList.contains('selected')) {
			li.classList.remove("selected");
		} else {
			li.classList.add("selected"); 
		}
  });

  li.addEventListener("dblclick", function () {
    if (li.classList.contains('completed')) {
      li.classList.remove("completed");
    } else {
      li.classList.add("completed");
    }
  });
	
})

