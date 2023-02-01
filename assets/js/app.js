
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
function enviaMensagem(event){
    event.preventDefault();
    let form = $("#botaoEnvia").closest('form');
    let inputName = form.find('#nome');
    let inputEmail = form.find('#email');
    let inputMsg = form.find('#mensagem');
    let link = 'https://wa.me/5548991109898?text=Olá, sou '+ inputName.val() +' atendo por este telefone e pelo email: '+ inputEmail.val() +', minha solicitação seria a seguinte:'+ inputMsg.val() +'.'

    window.location.href = link;
}
function validaForm(){
    $('form input').on('blur', function(){
        if(!$(this).val() || ($(this)[0].type === 'email' && !$(this).val().includes('@'))){
            $(this).addClass("error");
            $('#botaoEnvia').attr('disabled', 'disabled').addClass('disabled');
        }
        else{
            $(this).removeClass("error");
            if($('#nome').val() !== '' && ($('#email').val() !== '' && $(this).val().includes('@'))){
                $('#botaoEnvia').removeAttr('disabled').removeClass('disabled');
            }
        }
    });    
}
function init(){
    loadScreen();
    backToTop();
    anchor();
    mobSlider();
    validaForm();
}
document.addEventListener( 'DOMContentLoaded', function(){
    init();
});
document.addEventListener('scroll', function(){
    backToTop();
});
console.log('parallax');
function mobSlider(){
  var slides = 1;
  var $dots = false;
  var $autoplay;
  $('.slider-centelha').each(function(){
    slides = $(this)[0].dataset.slides;
    
    if($(this)[0].dataset.slides !== null || $(this)[0].dataset.slides !== undefined){
      slides = $(this)[0].dataset.slides
    }
    if($(this).find('div').length > slides){
      $dots = true;
      $autoPlay = true;
    }else{
      $autoPlay = false;
    }
    $(this).slick({
      slidesToScroll:1,
      slidesToShow:slides,
      arrows:false,
      dots:$dots,
      autoplay:$autoPlay,
      autoplaySpeed:7000,
      adaptiveHeight:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            dots: true,
            infinite: false,
            autoplay:true,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
        },
      ]
    });
  })
}
function testimonialSlider(){
  $('.slider-testimonial').slick({
    slidesToScroll:1,
    slidesToShow:1,
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:7000,
    adaptiveHeight:true
  })
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
function faq(item){
    $('.faq .item').removeClass('aberto');
    setTimeout(function(){
        item.classList.add('aberto');
    },250);
}
console.log('fix');