console.log('fix');
/*
    Fazendo import dos arquivos: 
    tema.js
    fix.js
    parallax.js
    slider.js
*/
function init(){
    toggleTema();
}
document.addEventListener( 'DOMContentLoaded', function(){
    init();
});
console.log('parallax');
console.log('slider');
function toggleTema(){
    let tema = document.querySelector('body');
    let botaoTema = document.querySelector('#trocaTema label');
    botaoTema.addEventListener('click', function() {
        tema.classList.toggle('darkTheme');
    });    
}