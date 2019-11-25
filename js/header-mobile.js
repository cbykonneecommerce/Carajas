$(window).scroll(function(){
    if($(document).scrollTop() > 300){
      $('.search').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 300){
      $('.search').show();
    }
  });