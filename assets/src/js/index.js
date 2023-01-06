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