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

	if($(window).width() >=900){
		var n_height_screen = height_screen - $('.nav-content').outerHeight();
		$('#portafolio').css('min-height', n_height_screen);
	}

	if($(window).width() >= 984){
		$('#contenido').css('min-height', height_screen);
		var contenido_height = $('#contenido').height();
		var saludo_height = $("div.saludo").height();
		var padding_saludo = (contenido_height - saludo_height) / 2;
		$("div.saludo").css('padding', padding_saludo+ 'px 0px');
	}

	setear_imagenes_portafolio();
	resize_trabajo();
});

$(window).resize(function(){
	resize_trabajo();
});

$(window).scroll(function(){
	var top_about_me = $("#contenido").offset().top;
	var current_position = $(window).scrollTop();

	if( current_position >= top_about_me){
		$('header div.nav-content').addClass('nav-con-color');
	}
	if( current_position < top_about_me){
		$('header div.nav-content').removeClass('nav-con-color');
	}
});

function mostrar_texto_portafolio(element){
	var t = element;
	var title = $(t).children('.title');
	var text = $(t).children('p');
	$(title).css('transition','opacity .2s');
	$(title).css('opacity','0');
	setTimeout(function(){
		$(title).css('display','none');
		$(text).css('display','inherit');
		var margin_text = ($(t).height() - $(text).height()) / 2;
		$(text).css('margin',margin_text+'px 0px');
		$(text).css('margin-left','100px');
		$(text).css('transition','opacity .2s');
		$(text).css('opacity','1');
	},1000);
}

function esconder_texto_portafolio(element){
	var t = element;
	var title = $(t).children('.title');
	var text = $(t).children('p');
	$(text).css('transition','opacity .2s');
	$(text).css('opacity','0');
	setTimeout(function(){
		$(text).css('display','none');
		$(title).css('display','inherit');
		$(title).css('transition','opacity .2s');
		$(title).css('opacity','1');
	},200);
}

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
			$('.slide:nth-of-type('+i+') .text').css('opacity','0');
			$('.slide:nth-of-type('+i+') .text').css('transform','translateY(-50px)');
			$('.s2 .text').css('transform','translateY(0px)');
			$('.s2 .text').css('opacity','1');

		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s2')){
			$('.slide:nth-of-type('+i+')').removeClass('s2');
			$('.slide:nth-of-type('+i+')').addClass('s1');
			$('.slide:nth-of-type('+i+') .text').css('opacity','0');
			$('.slide:nth-of-type('+i+') .text').css('transform','translateY(-50px)');
			$('.s3 .text').css('transform','translateY(0px)');
			$('.s3 .text').css('opacity','1');

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
			$('.slide:nth-of-type('+i+') .text').css('opacity','0');
			$('.slide:nth-of-type('+i+') .text').css('transform','translateY(-50px)');
			$('.s2 .text').css('transform','translateY(0px)');
			$('.s2 .text').css('opacity','1');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s2')){
			$('.slide:nth-of-type('+i+')').removeClass('s2');
			$('.slide:nth-of-type('+i+')').addClass('s3');
			$('.slide:nth-of-type('+i+') .text').css('opacity','0');
			$('.slide:nth-of-type('+i+') .text').css('transform','translateY(-50px)');
			$('.s1 .text').css('transform','translateY(0px)');
			$('.s1 .text').css('opacity','1');
		}
		else if($('.slide:nth-of-type('+i+')').hasClass('s3')){
			$('.slide:nth-of-type('+i+')').removeClass('s3');
			$('.slide:nth-of-type('+i+')').addClass('s1');
		}
	}
}

function resize_trabajo(){
	var width_total = $(window).width();
	if(width_total<500){
		$(".trabajo").css('width', width_total);
		$(".trabajo").css('height', width_total);
		$(".title").css('line-height', $(".trabajo").height()+'px');
	}
	if(width_total>500 && width_total<900){
		width_total = (width_total / 2) - 3;
		console.log(':::');
		$(".trabajo").css('width', width_total);
		$(".trabajo").css('height', width_total);
		$(".title").css('line-height', $(".trabajo").height()+'px');
	}
	if(width_total>900){
		width_total = (width_total / 4) - 3;
		var height_total = ($('#portafolio').height())/3;
		$(".trabajo").css('width', width_total);
		$(".trabajo").css('height', height_total);
		$(".title").css('line-height', $(".trabajo").height()+'px');
		$("#lanashuso").css('width', (width_total*2)+3+'px');
		$("#legben").css('width', (width_total*2)+3+'px');
		$("#propgraphics").css('width', (width_total*3)+7.5+'px');
	}
}

function setear_imagenes_portafolio(){
	/*Imagenes*/
	$("#k7").css('background','url("img/k7.jpg")');
	$("#k7").css('background-position','top left');
	$("#k7").css('background-repeat','no-repeat');
	$("#k7").css('background-size','cover');
	$("#lanashuso").css('background','url("img/lanashuso.jpg")');
	$("#lanashuso").css('background-position','center center');
	$("#lanashuso").css('background-repeat','no-repeat');
	$("#lanashuso").css('background-size','cover');
	$("#legben").css('background','url("img/legben.jpg")');
	$("#legben").css('background-position','center center');
	$("#legben").css('background-repeat','no-repeat');
	$("#legben").css('background-size','cover');
	$("#ingear").css('background','url("img/ingear.jpg")');
	$("#ingear").css('background-position','center center');
	$("#ingear").css('background-repeat','no-repeat');
	$("#ingear").css('background-size','cover');
	$("#pixelbits").css('background','url("img/pixelbits.jpg")');
	$("#pixelbits").css('background-position','center center');
	$("#pixelbits").css('background-repeat','no-repeat');
	$("#pixelbits").css('background-size','cover');
	$("#verduleriaencasa").css('background','url("img/verduleriaencasa.jpg")');
	$("#verduleriaencasa").css('background-position','center center');
	$("#verduleriaencasa").css('background-repeat','no-repeat');
	$("#verduleriaencasa").css('background-size','cover');
	$("#espaciomodelo").css('background','url("img/espaciomodelo.jpg")');
	$("#espaciomodelo").css('background-position','center center');
	$("#espaciomodelo").css('background-repeat','no-repeat');
	$("#espaciomodelo").css('background-size','cover');
	$("#propgraphics").css('background','url("img/popgraphics.jpg")');
	$("#propgraphics").css('background-position','center center');
	$("#propgraphics").css('background-repeat','no-repeat');
	$("#propgraphics").css('background-size','cover');
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
function deslizar_servicios(){
	var nav_height = $('.nav-content').outerHeight();
	$('html, body').animate({
        scrollTop: $("#servicios").offset().top - nav_height
    }, 1000);
}
function deslizar_portafolio(){
	var nav_height = $('.nav-content').outerHeight();
	$('html, body').animate({
        scrollTop: $("#portafolio").offset().top - nav_height
    }, 1000);
}