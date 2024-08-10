document.getElementById('btn-trocar-senha').addEventListener('click', function() {
    console.log('Botão Trocar Senha clicado');
    document.getElementById('modal-senha').style.display = 'block';
});

document.getElementById('close-senha').addEventListener('click', function() {
    console.log('Botão Fechar Senha clicado');
    document.getElementById('modal-senha').style.display = 'none';
});

document.getElementById('btn-trocar-email').addEventListener('click', function() {
    console.log('Botão Trocar Email clicado');
    document.getElementById('modal-email').style.display = 'block';
});

document.getElementById('close-email').addEventListener('click', function() {
    console.log('Botão Fechar Email clicado');
    document.getElementById('modal-email').style.display = 'none';
});

// Fechar modal quando clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal-senha')) {
        console.log('Clicou fora do modal Senha');
        document.getElementById('modal-senha').style.display = 'none';
    }
    if (event.target == document.getElementById('modal-email')) {
        console.log('Clicou fora do modal Email');
        document.getElementById('modal-email').style.display = 'none';
    }
});
