const novaTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const removerSelecionados = document.getElementById('remover-selecionados');
const tarefas = document.getElementsByClassName('tarefas');
const lista = document.getElementById('lista-tarefas');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
let itemSelecionado = "";
// for (let i = 0; i < localStorage.length; i+=1){
//     let tarefa = document.createElement('li');
//     tarefa.textContent = localStorage.listaDeTarefas(i);
//     tarefa.classList.add('tarefas');
//     tarefa.classList.add(count);
//     lista.appendChild(tarefa);
//     item = document.getElementsByClassName(count)[0];
//     item.addEventListener('click', function () {
//         if (itemSelecionado == item) {
//             item.classList.remove("selected");
//             itemSelecionado = "";
//         } else {
//             item.classList.add("selected");
//             itemSelecionado = item;
//         }
//     })
//     item.addEventListener('doubleclick', function (){
//         if (item.classList.contains("complited")){
//             item.classList.remove("completed");
//         } else {
//             item.classList.add("completed");
//         }
//     }
//   )};
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
                tarefa.classList.add("selected");
                itemSelecionado = tarefa;
            }
        });
        // item.addEventListener('doubleclick', function (){
        //     if (item.classList.contains("complited")){
        //         item.classList.remove("completed");
        //     } else {
        //         item.classList.add("completed");
        //     }
        // })
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
// removerSelecionado.addEventListener('click', function (){
//     $("li").remove(".selected");
//     itemSelecionado = "";
// });
// removerFinalizados.addEventListener('click', function () {
//     $("li").remove(".completed");
// });
// apagaTudo.addEventListener('click', function () {
//     lista.innerHTML = "";
//     localStorage.clear();
// });
// salvarTarefas.addEventListener('click', function (){
//     for (let i = 0; i < tarefas.length; i+=1){
//         alert(tarefas.value[i]);
//         localStorage['listaDeTarefas'] = tarefas[i];
//     }
// });