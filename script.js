// let titulo = document.createElement("h1")
// titulo.textContent="Meu Primeiro HTML Com JS 🚀 ";
// document.body.appendChild(titulo);
// titulo.style.color="green";
// let titulo_02 = document.createTextNode(" - CFB Cursos");
// titulo.appendChild(titulo_02);

let botao = document.getElementById("criar-tarefa")
botao.addEventListener("click",function(){
let lista = document.getElementById("lista-tarefas");
let itensDigitados = document.getElementById("texto-tarefa");
let liItensDigitados = document.createElement("li");
liItensDigitados.innerText=itensDigitados.value;
lista.appendChild(liItensDigitados);
itensDigitados.value="";
itensDigitados.focus();
});