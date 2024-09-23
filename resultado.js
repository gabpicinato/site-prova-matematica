window.onload = function() {
    const respostas = ["A", "C", "D", "C", "A", "E", "C", "D", "B", "A"];
    const totalQuestoes = respostas.length;
    let acertos = 0;

    for(let i = 1; i<=totalQuestoes; i++){
        let resposta = localStorage.getItem(`respostaQuestao${i}`);
        console.log(resposta);

        if(resposta){
            if(resposta=== respostas[i-1])
                acertos++;
        }
    }
    console.log(acertos);

    let nota = acertos;

    const notaElemento = document.getElementById('nota');
    const mensagemElemento = document.getElementById('mensagem-resultado');

    if(nota === 10){
        mensagemElemento.textContent = 'Parabéns! Você acertou todas as questões!';
    }

    else if(nota >= 7){
        mensagemElemento.textContent = 'Você foi muito bem, mais um pouco e você chegará no 10!';
    }

    else if(nota >= 5){
        mensagemElemento.textContent = 'Você foi bem, continue tentando e alcançará melhores resultados!';
    }

    else if(nota < 5){
        mensagemElemento.textContent = 'Você pode melhorar, continue tentando e confie no seu potencial!';
    }

    notaElemento.textContent = `Nota: ${nota}/10`;
}

function resetarDados(){
    localStorage.clear();
}