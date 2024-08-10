$(document).ready(function() {
    $('.menu').click(function() {
        $('nav').slideToggle();
    });

    function showSection(targetId) {
        $('.section').each(function() {
            if (this.id === targetId) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Inicializar a seção padrão
    var activeSection = $('input[name="activeSection"]').val() || 'carteira';
    showSection(activeSection);


    // Configurar eventos de clique para os links de navegação
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var targetId = $(this).data('target');
        showSection(targetId);
    });

    // Configurar eventos de clique para o botão de comprar tickets
    $('#comprar-tickets').click(function() {
        showSection('comprar');
    });


    // Configurar evento de clique para o botão de logout
    $('#logout-btn').click(function() {
        window.location.href = 'login';
    });
});