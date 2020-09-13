let lista = document.querySelector("#lista-tarefas");
document.querySelector("#criar-tarefa").addEventListener("click", () => {
  const elementoLista = document.createElement("li");
  elementoLista.innerText = document.querySelector("#texto-tarefa").value;
  elementoLista.addEventListener("click", () => {
    elementoLista.style.backgroundColor = "rgb(128, 128, 128)";
  });
  lista.appendChild(elementoLista);
  document.querySelector("#texto-tarefa").value = ""; //reseta o input
});
