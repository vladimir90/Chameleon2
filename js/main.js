

//navbar fade
$(window).on('scroll',function(){

  var bodyHeight = $('body').height();
  	  bodyHeight = 400;

  var distanceTop = $(window).scrollTop();
  var nav = $('nav');
  var species = $('.species');
  
 

  if(distanceTop > bodyHeight){

  	nav.css('background-color','#BEF94E');
  	species.slideDown();
  	
  } else{

  	nav.css('background-color','#000');
  	species.slideUp();
 
  }
});



//animation scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



