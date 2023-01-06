console.log('fix');
/*
    Fazendo import dos arquivos: 
    tema.js
    fix.js
    parallax.js
    slider.js
*/
function backToTop(){
    let barra = window.pageYOffset;
    let botao = document.getElementById('btt');
    if(barra > 200){
        botao.classList.add('show');
    }else{
        botao.classList.remove('show');
    }
}
function clickToTop(){
    setTimeout(() => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        });
    }, 300);
};

function init(){
    toggleTema();
    backToTop();
}
document.addEventListener( 'DOMContentLoaded', function(){
    init();
});
document.addEventListener('scroll', function(){
    backToTop(); 
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