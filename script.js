'use strict'
window.onload = function () {

    // clearListedField();
    insertTextBuildListField();
    clearField();
    selectItem();
    RiskListChosen();
    PaintListChosen();

    function printGray() {

    }

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


    // function clearListedField() {
    //     let li = document.querySelector('ol');
    //     for (let item = 0; item < li.length; item += 1) {
    //         document.querySelector('.clearReadyBtn').addEventListener('click', function () {
    //             let testAttr = li[item].getAttribute('class');
    //             if (testAttr === 'item selected') {
    //                 console.log(li[item]);
    //                 li[item].removeChild(li[item]);
    //             }
    //         });
    //     }
    // }


    function clearField() {
        document.querySelector('.btnClear').addEventListener('click', function () {
            let li = document.getElementsByTagName('ol');
            for (let item = 0; item < li.length; item += 1) {
                li[item].innerHTML = '';
            }
        });
    }

    function selectItem() {
        let list = document.querySelectorAll('ol');
        list.forEach(item => { // para cada elemento
            item.addEventListener('dblclick', function (event) {
                event.target.classList.add('selected'); //verifica qual elemento recebeu a ação
                list.forEach(item => { // efetuo loop para identificar se
                    if (item !== event.target) {
                        item.classList.remove('selected');
                    }
                });
            });
        });
    }

    function RiskListChosen() {
        let list = document.querySelectorAll('ol');
        for (let item = 0; item < list.length; item += 1) {
            list[item].addEventListener('dblclick', function (event) {
                event.target.style.textDecoration = 'line-through';
            });
        }
    }

    function PaintListChosen() {
        let list = document.querySelectorAll('ol');
        for (let item = 0; item < list.length; item += 1) {
            list[item].addEventListener('click', function (event) {
                event.target.style.color = 'rgb(128, 128, 128)';
            });
        }
    }
}