console.log('fix');

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
console.log('parallax');
function mobSlider(){
    $('.slider-grid-four').slick({
        slidesToScroll:1,
        slidesToShow:4,
        arrows:false,
        dots:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                infinite: false,
                dots: true,
                autoplay:true,
                autoplaySpeed:7000
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  dots: true
                }
            },
        ]
    });
}
var $cursor ;
function toggleTema(){
    var tema = document.querySelector('body');
    var elementExists = document.getElementById("trocaTema")
    if(document.body.contains(elementExists)){
        var botaoTema = document.querySelector('#trocaTema label');
        botaoTema.addEventListener('click', function() {
            tema.classList.toggle('darkTheme');
        });
    }
}

function loadScreen(){
    setTimeout(function(){
        var loadScreen = document.getElementById('loadScreen');
        loadScreen.classList.add('loaded');
        setTimeout(function(){
            loadScreen.remove();
        },300)
    },3400)
}
/*
function cursor(event) {
    $cursor = document.getElementById('customCursor');
    const allAnchorsTags = document.querySelectorAll('a');
    allAnchorsTags.forEach((item)=>{
        item.addEventListener('mouseover',function(){
            $cursor.classList.add('hoveringLink')
        });
        item.addEventListener('mouseleave',function(){
            $cursor.classList.remove('hoveringLink')
        })
    })
    document.addEventListener('mousemove',function checkHover(event){
        $cursor.setAttribute('style','top:'+event.y+'px; left:'+event.x+'px;')
    });
}
document.addEventListener('mouseleave',function(event){
    $cursor.classList.add('mouseOut');
});
document.addEventListener('mouseover',function(event){
    if($cursor.classList.contains('mouseOut')){
        $cursor.classList.remove('mouseOut');
    }
});
*/