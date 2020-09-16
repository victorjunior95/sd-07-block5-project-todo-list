window.onload = function () {
    insertTextBuildListField();
    clearField();


    function insertTextBuildListField() {
        document.querySelector("#criar-tarefa").addEventListener("click", function () {
            let list = document.querySelector("#lista-tarefas");
            let text = document.querySelector("#texto-tarefa");
            let li = document.createElement('li');
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
            // li.forEach(item => {
            //     item.value = '';
            // });
        });

    }
}