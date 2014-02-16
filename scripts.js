$(document).ready(function(){var device=navigator.userAgent.toLowerCase();var ios=device.match(/(iphone|ipod|ipad)/);$("a[href*=#]").on('click',function(e){var scrollTarget=$(this.hash).offset().top;if(scrollTarget)
e.preventDefault();if(parseInt(scrollTarget)!==parseInt($(window).scrollTop())){var nav2=$("nav");if(ios)nav2.hide();$('html,body').animate({scrollTop:scrollTarget},1000,"swing",function(evt){if(ios){if(scrollTarget==0)
nav2.css({position:'absolute',top:$("#top").height()});else
nav2.css({position:'absolute',top:scrollTarget});var nav2clone=$("nav")
nav2clone.show();}});}});if(ios){$(document).bind('touchmove',function(){var intro=$("#top"),nav2=$("nav");console.log(nav2.position().top);if(intro.height()!=nav2.position().top)
{nav2.css({position:'fixed',top:'0px'});console.log(nav2.position().top);}
else
{nav2.css({position:'relative',top:''});}});}
$("#top").on("click","#backToTop",function(){$("body").animate({scrollTop:0},1000);});$('.contact-form').ajaxForm({target:'#error',success:function(){$('#error').fadeIn('slow');}});$(window).scroll(function(){if($(window).scrollTop()>200){$("#backToTop").fadeIn(250);}else{$("#backToTop").fadeOut(250);}});});