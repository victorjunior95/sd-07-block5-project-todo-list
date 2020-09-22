criarTarefaButton = document.querySelector('#criar-tarefa');
removerFinalizadosButton = document.querySelector('#remover-finalizados');
salvarTarefasButton = document.querySelector('#salvar-tarefas');
removerSelecionadosButton = document.querySelector('#remover-selecionado');
apagaTudoButton = document.querySelector('#apaga-tudo');
listaDeTarefas = document.querySelector('#lista-tarefas');
tarefaInput = document.querySelector('#texto-tarefa');
itemLista = document.querySelectorAll('.item-lista');

//   addEventOnItemLista()
//   // $('#lista-tarefas').append(function () {
//   //   return $(this).children().get().reverse()
//   // });


$('#criar-tarefa').click(function () {
  $('#lista-tarefas').append(`<li class="item-lista">${tarefaInput.value}</li>`);
  tarefaInput.value = '';

  // $('.item-lista').on('dblclick', function () {
  //   $(".item-lista").addClass('completed');
  // });
});

$('#apaga-tudo').click(function () {
  $('#lista-tarefas').empty();
});
