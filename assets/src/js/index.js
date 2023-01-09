
function backToTop(){
    var barra = window.pageYOffset;
    var botao = document.getElementById('btt');
    if(barra > 200){
        botao.classList.add('show');
    }else{
        botao.classList.remove('show');
    }
}

function anchor () {
    var ancoras = document.getElementsByClassName('anchor');
    var menuHeight = document.querySelector('header').offsetHeight
    var funcAncora = function(e) {
        e.preventDefault();
        var destino = this.getAttribute("href").substring(1);
        destino = document.getElementById(destino);
        window.scrollTo({
            top: destino.offsetTop -menuHeight,
            behavior: "smooth"
        });
    }
    Array.from(ancoras).forEach(function (element){
        element.addEventListener('click', funcAncora);
    });
}
function init(){
    //toggleTema();
    loadScreen();
    backToTop();
    anchor();
}
document.addEventListener( 'DOMContentLoaded', function(){
    init();
});
document.addEventListener('scroll', function(){
    backToTop();
});