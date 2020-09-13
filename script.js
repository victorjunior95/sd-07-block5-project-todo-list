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
    } else {
      elementoLista.classList.add("completed");
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

document.querySelector("#remover-selecionado").addEventListener("click", () => {
  const elemento = document.getElementsByTagName("li");
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i].style.backgroundColor === "rgb(128, 128, 128)") {
      document.getElementById("lista-tarefas").removeChild(elemento[i]);
    }
  }
});
