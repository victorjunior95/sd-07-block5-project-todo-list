var texto = document.querySelector("#texto-tarefa");
var lista = document.querySelector("#lista-tarefas");
var botao = document.querySelector("#criar-tarefa");


function criarLista() {

    if (texto.value != "") {
        let itensAFazer = document.createElement('li');
        itensAFazer.innerText = texto.value;

        lista.appendChild(itensAFazer);
        texto.value = "";
    }
}

function selecionar(e) {
    e.target.style.backgroundColor = 'red';
}

botao.addEventListener('click', criarLista);
lista.addEventListener('click', selecionar);