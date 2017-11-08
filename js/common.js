$(document).ready(function(){
	var height_screen = $(window).height();
	$('header').css('min-height', height_screen);
	
	setTimeout(function(){
		$('.nav-content').css('transition', 'opacity .3s');
		$('.nav-content').css('opacity', '1');
	},300);

	setTimeout(function(){
		var header_height = $('header').height();
		var header_text_height = $('.header-text').height();
		var nav_height = $('.nav-content').height();

		var padding_height = (header_height - header_text_height - nav_height) / 2;
		console.log(header_text_height);
		$('.header-text').css('transition', 'opacity .2s');
		$('.header-text').css('opacity', '1');
		$('.header-text').css('padding', padding_height+ 'px 0px');
	},500);
});

function deslizar_abajo(){
	$('html, body').animate({
        scrollTop: $("#contenido").offset().top
    }, 2000);
}