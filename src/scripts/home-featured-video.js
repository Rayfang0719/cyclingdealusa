$(document).ready(function() {
    $('.home-featured-video-thumb').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.home-featured-video'
    });
});

$('.home-featured-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.home-featured-video-thumb'
});
