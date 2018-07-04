
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



$("#contact-form").validate({
  rules: {
    // simple rule, converted to {required:true}
    name: "required",
   
  },
  errorPlacement: function(){
        return false;
    },
  submitHandler: function(form) {
    form.submit();
  }
 });


function getFormDataString(formEl) {
  var formData = new FormData(formEl),
      data = [];

  for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
  }

  return data.join("&");
}

// Fetch the form element
var formEl = document.getElementById("contact-form");

// Override the submit event
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (grecaptcha) {
    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      return false;
    }
  }

  if ($('#grpg').is(':checked')) {  
    console.log('error');
    return false;
  }

  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 302) { // CloudCannon redirects on success
      // It worked
    }
  });

  request.open(formEl.method, formEl.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formEl));
});


