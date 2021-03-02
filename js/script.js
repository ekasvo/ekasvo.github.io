 var owl = $('.owl-carousel');
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	margin: 15,
  	nav: true,
  	dots:false,
  	autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  	responsive:{
        0:{
            items:1,
            nav: false,
            dots:true
        },
        576:{
            items:2
        },
        768:{
            items:3
        }
    }
  });
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

$('.fotorama').fotorama({
 arrows: 'always',
 swipe: true,
 keyboard: true

 });

$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });
});