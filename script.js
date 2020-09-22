const novaTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const removerSelecionado = document.getElementById('remover-selecionado');
const tarefas = document.getElementsByClassName('tarefas');
const lista = document.getElementById('lista-tarefas');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
let itemSelecionado = "";

// let listaDeTarefas = localStorage.getItem("listaDeTarefas");
// for (let i = 0; i < listaDeTarefas.length; i+=1){
//     lista.appendChild(listaDeTarefas[i]);
//     listaDeTarefas[i].addEventListener('click', function () {
//         if (itemSelecionado == listaDeTarefas[i]) {
//             listaDeTarefas[i].classList.remove("selected");
//             itemSelecionado = "";
//         } else {
//             for (let i = 0; i < listaDeTarefas.length; i+=1) {
//                 listaDeTarefas[i].classList.remove("selected");
//             }
//             listaDeTarefas[i].classList.add("selected");
//             itemSelecionado = listaDeTarefas[i];
//         }
//     });
//     listaDeTarefas[i].addEventListener('dblclick', function () {
//         if (listaDeTarefas[i].classList.contains("complited")){
//             listaDeTarefas[i].classList.remove("complited");
//         } else {
//             listaDeTarefas[i].classList.add("completed");
//         }
//     });    
// }

criarTarefa.addEventListener('click', function () {
    if (novaTarefa.value == '') {
        alert("Digite uma tarefa.");
    } else {
        let count = tarefas.length +1;
        let tarefa = document.createElement('li');
        tarefa.textContent = novaTarefa.value;
        tarefa.classList.add('tarefas');
        tarefa.classList.add(count);
        lista.appendChild(tarefa);
        novaTarefa.value = "";
        tarefa.addEventListener('click', function () {
            if (itemSelecionado == tarefa) {
                tarefa.classList.remove("selected");
                itemSelecionado = "";
            } else {
                for (let i = 0; i < tarefas.length; i+=1) {
                    tarefas[i].classList.remove("selected");
                }
                tarefa.classList.add("selected");
                itemSelecionado = tarefa;
            }
        });
        tarefa.addEventListener('dblclick', function () {
            if (tarefa.classList.contains("complited")){
                tarefa.classList.remove("complited");
            } else {
                tarefa.classList.add("completed");
            }
        });
    }
});
// moverCima.addEventListener('click', function () {
//     if (itemSelecionado == ""){
//         alert ('selecione um item.');
//     } else if (itemSelecionado == lista.firstChild){
//         alert('Esse item já está na posição mais alta');
//     } else {
//         let mudanca = itemSelecionado.innerHTML;
//         itemSelecionado.innerHTML = itemSelecionado.previousElementSibling.innerHTML;
//         itemSelecionado.previousElementSibling.innerHTML = mudanca;
//     }
// });
// moverBaixo.addEventListener('click', function () {
//     if (itemSelecionado == ""){
//         alert ('selecione um item.');
//     } else if (itemSelecionado == lista.lastChild) {
//         alert('Esse item já está na posição mais baixa');
//     } else {
//         let mudanca = itemSelecionado;
//         itemSelecionado.innerHTML = itemSelecionado.nextElementSibling.innerHTML;
//         itemSelecionado.nextElementSibling.innerHTML = mudanca;
//     }
// });
removerSelecionado.addEventListener('click', function (){
    for (let i = 0; i < tarefas.length; i+=1){
        if (tarefas[i].classList.contains("selected")){
            tarefas[i].remove();
        }
    }
    itemSelecionado = "";
});
removerFinalizados.addEventListener('click', function () {
    for (let i = 0; i < tarefas.length; i+=1){
        if (tarefas[i].classList.contains("completed")){
            tarefas[i].remove();
        }
    }
});
apagaTudo.addEventListener('click', function () {
    lista.innerHTML = "";
    localStorage.clear();
});
salvarTarefas.addEventListener('click', function (){
    localStorage.clear();
    for (let i = 0; i < tarefas.length; i+=1){
            localStorage.setItem("listaDeTarefas", tarefas[i]);
    }
});
// localStorage.removeItem('key_da_propriedade');