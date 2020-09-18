/*
5 -
- No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

6 -
- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

### 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).

### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
##### As seguintes verificações serão feitas:

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.

### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

##### As seguintes verificações serão feitas:

- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid rgb(0, 0, 0)`.
- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid rgb(0, 0, 0)`
- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo

- 10 - Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

11 - - Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista


*/