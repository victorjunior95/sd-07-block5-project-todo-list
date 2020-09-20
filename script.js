const container = document.querySelector("#container");
const input =document.querySelector("#texto-tarefa");
const buttonAdicionar = document.querySelector("#criar-tarefa");

const ol = document.createElement("ol");
ol.id ="lista-tarefas";
container.appendChild(ol);

buttonAdicionar.addEventListener('click', function(){
  if(input.value === ""){
    alert("adicione uma tarefa");
  }else{
    const li =document.createElement("li");
    const lista= document.createTextNode(input.value);
    li.className="tarefa";
    li.appendChild(lista);
    ol.appendChild(li);
    input.value ="";
  }
});
