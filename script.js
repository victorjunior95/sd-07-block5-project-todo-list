let lista = document.querySelector("#lista-tarefas");

document.querySelector("#criar-tarefa").addEventListener("click", () => {
  const elementoLista = document.createElement("li");
  elementoLista.innerText = document.querySelector("#texto-tarefa").value;
  elementoLista.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
      document.getElementsByTagName("li")[i].style.backgroundColor = "white";
    }

    elementoLista.style.backgroundColor = "rgb(128, 128, 128)";
  });
  elementoLista.addEventListener("dblclick", () => {
    if (elementoLista.classList.contains("completed")) {
      elementoLista.classList.remove("completed");
      console.log(",");
    } else {
      elementoLista.classList.add("completed");
      console.log(".");
    }
  });
  lista.appendChild(elementoLista);
  document.querySelector("#texto-tarefa").value = ""; //reseta o input
});

//Apagar tudo
document.querySelector("#apaga-tudo").addEventListener("click", () => {
  document.querySelector("#lista-tarefas").innerHTML = "";
});

//apagar finalizados
document.querySelector(".rf").addEventListener("click", () => {
  for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    if (
      document.getElementsByTagName("li")[i].classList.contains("completed")
    ) {
      document
        .getElementById("lista-tarefas")
        .removeChild(document.getElementsByTagName("li")[i]);
      i = 0;
    }
  }
});
