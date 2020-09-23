// ADICIONA UM NOVO ITEM
$("#criar-tarefa").click(function () {
  if ($("#texto-tarefa").val() === "") {
    alert("Você deve digitar algo para ser adicionado a lista!");
  } else {
    $("#lista-tarefas").append(
      `<li class="item-lista">${$("#texto-tarefa").val()}</li>`
    );
    $("#texto-tarefa").val("");
  }
});

$("#lista-tarefas").on("click", "li", function (e) {
  $(".selected").removeClass("selected");
  $(e.target).addClass("selected");
});

// REMOVE OS FINALIZADOS
$("#remover-finalizados").click(function () {
  $(".completed").remove();
});

// TODO: SALVAR TAREFAS WEBSTORAGE
$("#salvar-tarefas").click(function () {
  for (let i = 0; i < $(".item-lista").length; i += 1) {
    console.log($(".item-lista")[i]);
  }
});

// REMOVE OS SELECIONADOS
$("#remover-selecionado").click(function () {
  $(".selected").remove();
});

// APAGA TUDO
$("#apaga-tudo").click(function () {
  $("#lista-tarefas").empty();
  $("#texto-tarefa").val("");
});
