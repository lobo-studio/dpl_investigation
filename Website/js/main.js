$(document).ready(function() {
  $(".burger-btn").click(function(){
      event.preventDefault();
      $("body").toggleClass("nav_open");
  });
});
