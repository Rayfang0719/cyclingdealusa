$(document).ready(function(){

    $('.product-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-img-nav'
    });
    $('.product-img-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product-image-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true
    });

    $('ul.tabs').each(function(){
        var active, content, links = $(this).find('a');
        active = links.first().addClass('active');
        content = $(active.attr('href'));
        links.not(':first').each(function () {
            $($(this).attr('href')).hide();
        });
        $(this).find('a').click(function(e){
            active.removeClass('active');
            content.hide();
            active = $(this);
            content = $($(this).attr('href'));
            active.addClass('active');
            content.show();
            return false;
        });
        var n =$(".product-main-image").length;
      
        for(let i = 0; i<n;i++){
            var imgWidth = $(".product-main-image")[i].naturalWidth;
            var imgHeight = $(".product-main-image")[i].naturalHeight;
            console.log("width and height", imgWidth, imgHeight);
            if (imgHeight > imgWidth) {
                $(".product-main-image")[i].css('height', "190px");
                var adptWidth = 657 * imgWidth / imgHeight + "px";
                $(".product-main-image")[i].css('width', adptWidth);


            } else {
                $(".product-main-image")[i].css('width', "100%");
            }
        }
    
    });



});
