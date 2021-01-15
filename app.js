$( document ).ready(function() {

    console.log( "ready!" );

    $('.menu_toggle').click(function(){
        $(".nav").toggleClass("mobile_nav");
        $(this).toggleClass("is-active");
     });
    
    $('nav li').click(function(){
      $('.nav').removeClass('mobile_nav');
      $('.menu_toggle').removeClass('is-active');
    });
    
     $(window).on('scroll',function(){
        if($(window).scrollTop()){
          $('nav').addClass('scroll');
        }else {
          $('nav').removeClass('scroll');
        }
      });
});