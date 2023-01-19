
function backToTop(){
    var barra = window.pageYOffset;
    var botao = document.getElementById('btt');
    if(barra > 200){
        botao.classList.add('show');
    }else{
        botao.classList.remove('show');
    }
}

function anchor() {
    $(window).on('load',function () {
        var page = $('html, body');
        var urlHash = window.location.hash.replace('#', '');
        $('.anchor').click(function (e) {
            verificaMenuMobile(e)
            page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            return false;
        });
        if (urlHash.length > 0) {
            page.animate({
                scrollTop: $('#' + urlHash).offset().top
            }, 500);
        }
    });
}
function verificaMenuMobile(linkMenu){
    if(linkMenu.target.closest('header') !== null && linkMenu.target.closest('header').classList.contains('mob-menu-aberto')){
        mobileMenuToggle();
    }
}
function mobileMenuToggle(){
    const menuBox = document.getElementById('menu-box');
    const menuBtn = document.getElementById('menuBtn');
    menuBox.classList.toggle('mob-menu-aberto')
    menuBtn.classList.toggle('mob-menu-aberto')
}
function init(){
    //toggleTema();
    loadScreen();
    backToTop();
    anchor();
    //cursor(event);
    mobSlider();

}
document.addEventListener( 'DOMContentLoaded', function(){
    init();
});
document.addEventListener('scroll', function(){
    backToTop();
});