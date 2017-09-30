$(window).load(function(){
  if($(window).scrollTop()>1){
    $(".navbar-theme").css("background-color", "#1E003D");
    $(".navbar-theme").css("border-bottom", "1px solid #222");
    $(".navbar-dark .navbar-nav .nav-link").css("color", "#ffffff");
  }
  else{
    $(".navbar-theme").css("background-color", "transparent");
    $(".navbar-theme").css("border-bottom", "1px solid transparent");
    $(".navbar-dark .navbar-nav .nav-link").css("color", "#ffffff");
  }
});

$(window).scroll(function() {
  if($(window).scrollTop()>100){
    $(".navbar-theme").css("background-color", "#1E003D");
    $(".navbar-theme").css("border-bottom", "1px solid #222");
    $(".navbar-dark .navbar-nav .nav-link").css("color", "#ffffff");
  }
  else{
    $(".navbar-theme").css("background-color", "transparent");
    $(".navbar-theme").css("border-bottom", "1px solid transparent");
    $(".navbar-dark .navbar-nav .nav-link").css("color", "#ffffff");
  }
});

$(document).ready(function(){
  $('#move-home').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 350);
  });
  $('#move-to-about').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 600}, 350);
  });
});
