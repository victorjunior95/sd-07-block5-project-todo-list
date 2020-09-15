// let titulo = document.createElement("h1")
// titulo.textContent="Meu Primeiro HTML Com JS 🚀 ";
// document.body.appendChild(titulo);
// titulo.style.color="green";
// let titulo_02 = document.createTextNode(" - CFB Cursos");
// titulo.appendChild(titulo_02);

const botaoAdd = document.getElementById('criar-tarefa');
const enter = document.getElementById('texto-tarefa');

// Function to add products with key Enter.
enter.addEventListener('keyup', function (enterAdd) {
  if (enterAdd.keyCode === 13) {
    addProduct ();
  }
})

// Function to add products with click.
botaoAdd.addEventListener('click', addProduct );

function addProduct () {
  const lista = document.getElementById('lista-tarefas');
  const itensDigitados = document.getElementById('texto-tarefa');
  const liItensDigitados = document.createElement('li');
    liItensDigitados.innerText=itensDigitados.value;
    lista.appendChild(liItensDigitados);
    itensDigitados.value='';
    itensDigitados.focus();
};
// Function to remove all itens list.
const botaoClear = document.getElementById('apaga-tudo');
botaoClear.addEventListener('click', apagaTudo);
function apagaTudo () {
  const lista = document.getElementById('lista-tarefas');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);   
      }
      lista.innerHTML = '<h3>Itens Adicinados</h3>';
}
