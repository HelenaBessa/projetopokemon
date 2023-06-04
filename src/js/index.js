/*
O que precisamos fazer? Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou tema escuro.

- Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
        - 1º passo: Pegar no JS o elemento HTML correspondente ao botão de troca de tema;
        - 2º passo: Dar um jeito de pegar o JS o elemento HTML correspondente ao body;
        - 3º passo: Dar um jeito de identificar o clique do usuário no botão de troca de tema;
        - 4º passo: Adicionar a classe modo-escuro no body;
        - 5º passo: Trocar a imagem do botão de alterar tema para lua.

- Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo- escuro, remover pra mudar pro modo claro e mudar a imagem pro sol
         - 6º passo: Verificar se tem a classe modo escuro no body 
         - 7º passo: Remover a classe do modo-escuro do body
         - 8º passo: Trocar a imagem do botão de alterar pra tema sol.
*/

//- Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

//- 1º passo: Pegar no JS o elemento HTML correspondente ao botão de troca de tema;

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//- 2º passo: Dar um jeito de pegar o JS o elemento HTML correspondente ao body;
const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
//- 3º passo: Dar um jeito de identificar o clique do usuário no botão de troca de tema;
botaoAlterarTema.addEventListener("click", () => {
   
    //- Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo- escuro, remover pra mudar pro modo claro e mudar a imagem pro sol

    // - 6º passo: Verificar se tem a classe modo escuro no body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
    // - 7º passo: Remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

    // - 8º passo: Trocar a imagem do botão de alterar pra tema sol.
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
         //- 4º passo: Adicionar a classe modo-escuro no body;
        body.classList.add("modo-escuro");
        
        // - 5º passo: Trocar a imagem do botão de alterar tema para lua.
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }


});

