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

function selecionar(target) {
    target.classList.add('selected');
}

function limparSelecionar() {
    let items = document.querySelectorAll('#lista-tarefas li');
    for (index = 0; index < items.length; index += 1) {
        items[index].classList.remove('selected');
    }

}

botao.addEventListener('click', criarLista);
lista.addEventListener('click', function (e) {
    limparSelecionar();
    selecionar(e.target)
});
