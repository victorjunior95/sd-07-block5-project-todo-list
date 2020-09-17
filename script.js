'use strict'
window.onload = function () {

    insertTextBuildListField();
    clearField();
    selectItem();
    listChosen();

    function insertTextBuildListField() {
        document.querySelector("#criar-tarefa").addEventListener("click", function () {
            let list = document.querySelector("#lista-tarefas");
            let text = document.querySelector("#texto-tarefa");
            let li = document.createElement('li');
            li.className = 'item';
            li.textContent = text.value;
            if (text.value === '') {
                alert("Você precisa adicionar algo!");
            } else {
                list.appendChild(li);
                text.value = "";
                text.focus();
            }
        });
    }

    function clearField() {
        document.querySelector('.btnClear').addEventListener('click', function () {
            let li = document.getElementsByTagName('ol');
            for (let item = 0; item < li.length; item += 1) {
                li[item].innerHTML = '';
            }
        });

    }

    function selectItem(){
        let list = document.querySelectorAll('ol');
        console.log(list);
        list.forEach(item => { // para cada elemento
            item.addEventListener('click', function (event) {
                event.target.classList.add('selected'); //verifica qual elemento recebeu a ação
                list.forEach(item => { // efetuo loop para identificar se 
                    if (item !== event.target) {
                        item.classList.remove('selected');
                    }
                });
            });
        });
    }

    function listChosen() {
        let list = document.querySelectorAll('ol');
        for (let item = 0; item < list.length; item += 1) {
            list[item].addEventListener('click', function (event) {
                    event.target.style.textDecoration = 'line-through';
              
            });
        }
    }
}