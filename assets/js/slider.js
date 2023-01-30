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