// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$(function(){
    $('.about-me').click(function() {
    $("html,body").animate({scrollTop:$(".intro-title").offset().top});
    // $('#overlay').removeClass("open");
    // $('html div').removeClass("blur");
    $("#nav-btn").toggleClass("-active");
    $("#nav").toggleClass("-active");
      });

      $('.service-scroll').click(function() {
        $("html,body").animate({scrollTop:$(".service-point").offset().top});
        // $('#overlay').removeClass("open");
        // $('html div').removeClass("blur");
        $("#nav-btn").toggleClass("-active");
        $("#nav").toggleClass("-active");
     });
     $('.works-scroll').click(function() {
        $("html,body").animate({scrollTop:$(".works-point").offset().top});
        // $('#overlay').removeClass("open");
        // $('html div').removeClass("blur");
        $("#nav-btn").toggleClass("-active");
        $("#nav").toggleClass("-active");
     });
});

// animation / wow.js
// ==================================================
$(function(){
    new WOW().init();
});