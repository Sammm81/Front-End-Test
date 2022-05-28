// Owl Corousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:1,
        video: true,
        lazyLoad: true,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
});

$("#searchicon").click(function(){
    if($(".search-box").hasClass("active")){
    $(".search-box").removeClass("active");
    }else{
        $(".search-box").addClass("active");
    }
})