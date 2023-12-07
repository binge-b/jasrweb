$(document).ready(function(){
    $('.slider').slick({
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        // 矢印
        arrows:false,
        prevArrow: '<div class="slick-next"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots:false,
        pauseOnFucus:false,
        pauseOnHover:false,
        pauseOnDotsHover:false,
    });
  });

// スマホ用設定：スライド止めない
$('.slider').on('touchmove',
function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});