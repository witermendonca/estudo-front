var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event) {

    //aplicando apcidade antes de remover.
    event.target.parentNode.classList.add('fadeOut');

    //segura tempo necessario para animação antes de remover.
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    
})