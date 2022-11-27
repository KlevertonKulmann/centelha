function toggleTema(){
    let tema = document.querySelector('body');
    let botaoTema = document.querySelector('#trocaTema label');
    botaoTema.addEventListener('click', function() {
        tema.classList.toggle('darkTheme');
    });    
}