$(document).ready(function(){
	var height_screen = $(window).height();
	$('header').css('min-height', height_screen+'px');
	$('header div.carousel').css('min-height', height_screen+'px');
	$('header div.carousel div.slide').css('min-height', height_screen+'px');
	$('header div.carousel div.arrows').css('min-height', height_screen+'px');
	$('header div.carousel div.arrows span').css('line-height', height_screen+'px');

	var header_height = $('header').height();
	var nav_height = $('.nav-content').height();
	$('.slide').each(function(){
		var slide_text_height = $(this).children('.text').height();
		var padding_height = (header_height - slide_text_height) / 2;
		$(this).children('.text').css('padding', padding_height+ 'px 0px');
		
	});

	if($(window).width() >= 984){
		$('#contenido').css('min-height', height_screen);
		var contenido_height = $('#contenido').height();
		var saludo_height = $("div.saludo").height();
		var padding_saludo = (contenido_height - saludo_height) / 2;
		$("div.saludo").css('padding', padding_saludo+ 'px 0px');
	}

});

$(function(){
	var interval = null;
	$('header').on('mousemove', function(){
		clearInterval(interval);
	});
	interval = setInterval(function(){
		next();
	},6000);
});

function next(){
	$('.s1').css('opacity','0');
	$('.s3').css('opacity','1');
	for (var i = 1; i <= 3; i++) {
		if($('.slide:nth-of-type('+i+')').hasClass('s1')){
			$('.slide:nth-of-type('+i+')').removeClass('s1');
			$('.slide:nth-of-type('+i+')').addClass('s3');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s2')){
			$('.slide:nth-of-type('+i+')').removeClass('s2');
			$('.slide:nth-of-type('+i+')').addClass('s1');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s3')){
			$('.slide:nth-of-type('+i+')').removeClass('s3');
			$('.slide:nth-of-type('+i+')').addClass('s2');
		}
	}
}

function prev(){
	$('.s1').css('opacity','1');
	$('.s3').css('opacity','0');
	for (var i = 1; i <= 3; i++) {
		if($('.slide:nth-of-type('+i+')').hasClass('s1')){
			$('.slide:nth-of-type('+i+')').removeClass('s1');
			$('.slide:nth-of-type('+i+')').addClass('s2');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s2')){
			$('.slide:nth-of-type('+i+')').removeClass('s2');
			$('.slide:nth-of-type('+i+')').addClass('s3');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s3')){
			$('.slide:nth-of-type('+i+')').removeClass('s3');
			$('.slide:nth-of-type('+i+')').addClass('s1');
		}
	}
}

function deslizar_about_me(){
	$('html, body').animate({
        scrollTop: $("#contenido").offset().top
    }, 1000);
}
function deslizar_inicio(){
	$('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);
}