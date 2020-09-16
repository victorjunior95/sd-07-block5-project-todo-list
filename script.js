let buttonComand = document.querySelector("#criar-tarefa");
let inputAdd = document.getElementById("texto-tarefa");
let organizedList = document.getElementById("lista-tarefas");

buttonComand.addEventListener("click", function (){
    let addOnOl = document.createElement("li");
    organizedList.appendChild(addOnOl).innerText = inputAdd.value;
    inputAdd.value = "";

    let listSelect = document.querySelectorAll("li");

    for (let i = 0; i < listSelect.length; i += 1) {
        listSelect[i].addEventListener("click", function (event) {
            let color = document.querySelector(".color")
            event.target.className += "color"
            for (let j = 0; j < listSelect.length; j += 1) {
                if (listSelect [i] !== listSelect[j]) {
                    listSelect[j].classList.remove("color");
                }
            }
        })
      }
})
