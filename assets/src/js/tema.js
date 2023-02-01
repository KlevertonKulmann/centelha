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