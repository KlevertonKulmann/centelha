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