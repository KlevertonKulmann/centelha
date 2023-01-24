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
    item.classList.add('aberto');
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