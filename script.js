let textoTarefa = document.getElementById('texto-tarefa');
const botaoCriaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');

botaoRemoverSelecionado.addEventListener('click', function() {
  // Testa se existe algum objeto selecionado
  if (document.querySelectorAll('.selecionado').length !== 0) {
    listaTarefas.removeChild(document.querySelector('.selecionado'));
  }
});

botaoMoverCima.addEventListener('click', function() {
  const selecionado = document.querySelector('.selecionado');
  const primeiroFilho = listaTarefas.firstChild.nextSibling;

  // Testa se existe algum objeto selecionado
  if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== primeiroFilho)) {
    const irmaoMaisVelho = selecionado.previousElementSibling;
    const irmaoMaisNovo = selecionado
    listaTarefas.replaceChild(irmaoMaisVelho, selecionado);
    console.log(selecionado)
    console.log(selecionado.previousElementSibling)
    console.log(irmaoMaisNovo)
    console.log(irmaoMaisVelho)

    //listaTarefas.replaceChild(irmaoMaisNovo, irmaoMaisVelho);
    console.log(listaTarefas)
  }
  else {
    console.log('luciano');
  }
});

botaoMoverBaixo.addEventListener('click', function() {
// Testa se existe algum objeto selecionado
if (document.querySelectorAll('.selecionado').length !== 0) {

}
});

botaoRemoverFinalizados.addEventListener('click', function() {
  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    if (listaTarefas.children[i].classList.contains('completed')) {
      listaTarefas.removeChild(listaTarefas.children[i])
    }
  }
});

botaoApagaTudo.addEventListener('click', function() {
  for (let i = 0; listaTarefas.childElementCount != 0; i += 1) {
    listaTarefas.removeChild(listaTarefas.children[0]);
  }
});

listaTarefas.addEventListener('dblclick', function(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
});

botaoCriaTarefa.addEventListener('click', function() {
  if (textoTarefa.value !== ''){
    let listaItem = document.createElement('li');
    listaItem.className = ('texto-lista');
    listaItem.innerText = textoTarefa.value;
    listaTarefas.appendChild(listaItem);

    //textoTarefa.value = '';
  }
});

listaTarefas.addEventListener('click', function(event) {
  // Esse if testa se já existe a classe 'selecionado'. Se não houver nenhum
  // elemento selecionado essa classe não existe, logo não pode ser apagada
  if (document.querySelector('.selecionado') !== null) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
});

// botaoCriaTarefa.addEventListener('click', function() {
//   if (textoTarefa.value !== ''){
//     let span = document.createElement('span');
//     span.className = ('texto-lista');
//     span.innerText = textoTarefa.value;
//     let listItem = document.createElement('li');
//     listaTarefas.appendChild(listItem);
//     listItem.appendChild(span);

//     //textoTarefa.value = '';
//   }
// });

// listaTarefas.addEventListener('click', function(event) {
//   console.log(event.target.firstChild.firstChild);

//   // Testa se foi clicado na TAG SPAN. O filho do SPAN é o texto. E o filho do
//   // filho do SPAN é null. Agora, se por exemplo, for clicado no LI o filho é
//   // o SPAN e o filho do filho é o texto, logo nao quero que selecione/mude a cor
//   if (event.target.firstChild.firstChild === null) {

//     // Esse if testa se já existe a classe 'selecionado'. Se não houver nenhum
//     // elemento selecionado essa classe não existe, logo não pode ser apagada
//     if (document.querySelector('.selecionado') !== null) {
//       document.querySelector('.selecionado').classList.remove('selecionado');
//     }
//     event.target.parentNode.classList.add('selecionado');
//   }

// })
