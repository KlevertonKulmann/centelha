(function faq(){
    let faqBox = document.querySelector('#duvida .faq');
    fetch("../assets/src/json/faq.json")
  .then(response => response.json())
  .then(json => {
    json.faq.forEach(itemFaq => {
        let $pergunta = itemFaq.pergunta
        let $resposta = itemFaq.resposta
        let faqElem = document.createElement('div');
        let divPergunta = document.createElement('div');
        let divResposta = document.createElement('div');

        divPergunta.setAttribute('class','pergunta');
        divPergunta.innerHTML = '<h3>'+$pergunta+'</h3>'
        divResposta.setAttribute('class','resposta');
        divResposta.innerHTML = $resposta;

        faqElem.setAttribute('class','item');
        faqElem.setAttribute('onclick','faq(this)');
        faqElem.appendChild(divPergunta);
        faqElem.appendChild(divResposta);
        
        faqBox.appendChild(faqElem);        
    });
  });
})();

(function testimonal(){
    let testimonialBox = document.querySelector('#avaliacoes .slider-testimonial');
    fetch("../assets/src/json/testimonial.json")
    .then(response => response.json())
    .then(json => {
        json.testimonial.forEach(itemTestimonial=> {
            let $avatar = itemTestimonial.avatar;
            let $nome = itemTestimonial.nome;
            let $sobrenome = itemTestimonial.sobrenome;
            let $mensagem = itemTestimonial.mensagem;
            let testimonialElem = document.createElement('div');

            testimonialElem.innerHTML = '<div class="slide-content d-flex">' +
            '<div class="img-avatar">'+
            '<img src="'+ $avatar +'" alt="">'+
            '</div>'+
            '<div class="slide-content-data">'+
            '<h3 class="nome"> '+ $sobrenome +' <span class="primeiro-nome"> '+ $nome +' </span></h3>'+
            '<p class="testimonial"> '+ $mensagem +' </p>';

            testimonialBox.appendChild(testimonialElem);
        });

        testimonialSlider();
    });
})();

(function especialidades(){
    let especialidadesBox = document.querySelector('#especialidades #especialidades-box');
    fetch("../assets/src/json/especialidades.json")
    .then(response => response.json())
    .then(json => {
        json.especialidades.forEach(itemEspecialidades=> {
            let $img = itemEspecialidades.img;
            let $titulo = itemEspecialidades.titulo;
            let $texto = itemEspecialidades.texto;
           
            let espcialidadeslElem = document.createElement('div');

            espcialidadeslElem.setAttribute('class','item');
            espcialidadeslElem.innerHTML = '<div class="img-box">'+
                '<img src="'+ $img +'" alt="">'+
                '</div>'+
                '<h4>'+ $titulo +'</h4>'+
                '<p>'+ $texto +'</p>';

                especialidadesBox.appendChild(espcialidadeslElem);
        });

    });
})();