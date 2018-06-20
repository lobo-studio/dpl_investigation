$(document).ready(function() {
  $(".burger-btn").click(function(){
      event.preventDefault();
      $("body").toggleClass("nav_open");
  });
});




function scrollNav() {
  $('.anchor').click(function(){  
    //Toggle Class
    var theClass = $(this).attr("class");
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 75
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();