const btIniciar = document.getElementById('iniciar');
const btContinuar = document.getElementById('continuar');

btIniciar.addEventListener('click', function() {
    localStorage.clear();   
    window.location.href = 'questoes/questaoUm.html';
});

btContinuar.addEventListener('click', function() { 
    const ultimaQuestao = localStorage.getItem('ultimaQuestao');
    
    if (ultimaQuestao) {
        window.location.href = `questoes/${ultimaQuestao}`;
    }
    else {
        window.location.href = 'questoes/questaoUm.html';
    }
});

