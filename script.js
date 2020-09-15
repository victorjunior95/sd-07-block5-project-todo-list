//essa função está encarregada de criar os intens da minha lista ao clicar no botão
let botao = document.querySelector("#criar-tarefa");
function criarTarefa(){
    let lista = document.querySelector("#lista-tarefas");
    let inputDoTexto = document.querySelector("#texto-tarefa");
    let botao = document.querySelector("#criar-tarefa");
    let elemento = document.createElement("li");    
    let result =lista.appendChild(elemento);
    let conteudo=result.innerText = inputDoTexto.value;
}
botao.addEventListener("click", criarTarefa);

//está função está encarregada de zerar minha lista 
function limpando (){
let lista = document.querySelector('ol');
let li = document.querySelectorAll("li");
for(let i = 0; i < li.length; i += 1){
    let isso= li[i]
    lista.removeChild(isso);
}
}
document.querySelector("#apaga-tudo").addEventListener("click", limpando);

//esta função será encarregada de mudar a cor de fundo dos itens da lista 

function background (){
    
}