
$(document).ready(function(){
    $('.active-slider').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
    });
    $('.testimonial-slioder').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        dots:true,
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});