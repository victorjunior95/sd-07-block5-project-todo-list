criarTarefaButton = document.querySelector('#criar-tarefa');
salvarTarefasButton = document.querySelector('#salvar-tarefas');
apagaTudoButton = document.querySelector('#apaga-tudo');
listaDeTarefas = document.querySelector('#lista-tarefas');
tarefaInput = document.querySelector('#texto-tarefa');


// $('#lista-tarefas').append(function () {
//   return $(this).children().get().reverse()
// });

// ADICIONA UM NOVO ITEM
$('#criar-tarefa').click(function () {
  $('#lista-tarefas').append(`<li class="item-lista">${tarefaInput.value}</li>`);
  tarefaInput.value = '';

  // $('.item-lista').on('dblclick', function () {
  //   $(".item-lista").addClass('completed');
  // });
});

// REMOVE OS FINALIZADOS
$('#remover-finalizados').click(function () {
  $('.completed').remove();
});

// TODO: SALVAR TAREFAS WEBSTORAGE


// REMOVE OS SELECIONADOS
$('#remover-selecionado').click(function () {
  $('.selected').remove();
});

// APAGA TUDO
$('#apaga-tudo').click(function () {
  $('#lista-tarefas').empty();
});
