// Create a new list item when clicking on the "Add" button
function newElement() { //w3school
  var li = document.createElement("li"); //criando elemento
  var inputValue = document.getElementById("texto-tarefa").value; ///pega o conteúdo digitado pelo usuário passando valor para variável inputValue.
  var t = document.createTextNode(inputValue); //A variável t, assume o valor de inputValue, com createTextNode Este método pode ser usado para escapar caracteres HTML.
  li.appendChild(t); //passando variável t como filho de li
    if (inputValue === '') { //se input for '', aparece mensagemm de alerta
      alert("You must write something!");
    } else {
      document.getElementById("lista-tarefas").appendChild(li); //caso contrário, a variável li para como filho para ol com id myUL
    }
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}








/*// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/
