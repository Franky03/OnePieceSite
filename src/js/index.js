//Para cada personagem que tenha a classe personagem adiciona um evento (addeventlistener) (mouseenter é para quando passar o mouse em cima) que seria a classe selecionado

const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'doflamingo') return;
    /*
    OBJETIVO 1- quando passar o mouse em cima do personagem tem que:
        - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
        -retirar a classe selecionado do personagem selecionado
    */       
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');     
        
        personagem.classList.add('selecionado');
    
    /*
    OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
        -alterar a imagem do jogador 1
        -alterar o nome do jogador 1 
    */
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeSelecionado= personagem.getAttribute('data-name');

        const nomeJogador1= document.getElementById('nome-jogador-1');
        nomeJogador1.innerHTML = nomeSelecionado;
    });
});

/*
    OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
        -alterar a imagem do jogador 1
        -alterar o nome do jogador 1 */

