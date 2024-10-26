let totalJogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados é: ${totalJogosAlugados} `);
}

function alterarStatus(id) { //identificando o game
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

    let unusedVariable = "I am not used";


    //Alternando imagem e botão
    if(imagem.classList.contains("dashboard__item__img--rented")) {
        // adiciona uma confirmação antes de devolver o jogo
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
       imagem.classList.remove("dashboard__item__img--rented");
       botao.classList.remove("dashboard__item__button--return");
       botao.textContent = "Alugar";
    //decrementando o contador de jogos alugados
    totalJogosAlugados--;

        }
} else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";   
    
    //incrementa o contador de jogos alugados
    totalJogosAlugados++;
}contarEExibirJogosAlugados();

}

//inicializar a contagem considerando que os jogos começamalugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function verificarPalavraEPalindromo() {
    if(x=y || y=x ) {
        console,log("existe")
    } else {
        console.log("não existe");
    }
    return;
}
