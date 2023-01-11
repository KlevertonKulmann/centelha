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

function cursor(event) {
    var cursor = document.querySelector('#customCursor');
    const allAnchorsTags = document.querySelectorAll('a');
    allAnchorsTags.forEach((item)=>{
        item.addEventListener('mouseover',function(){
           document.getElementById('customCursor').classList.add('hoveringLink')
        });
        item.addEventListener('mouseleave',function(){
            document.getElementById('customCursor').classList.remove('hoveringLink')
        })
    })
    document.addEventListener('mousemove',function checkHover(event){
        var posY =  event.clientY;
        cursor.setAttribute('style','top:'+posY+'px; left:'+event.x+'px;')
    });
}
