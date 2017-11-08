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

		$('.header-text').css('transition', 'opacity .2s');
		$('.header-text').css('opacity', '1');
		$('.header-text').css('padding', padding_height+ 'px 0px');
	},500);

	if($(window).width() >= 984){
		$('#contenido').css('min-height', height_screen);
		var contenido_height = $('#contenido').height();
		var saludo_height = $("div.saludo").height();
		var padding_saludo = (contenido_height - saludo_height) / 2;
		$("div.saludo").css('padding', padding_saludo+ 'px 0px');
	}

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




	resize_trabajo();
});

$(window).resize(function(){
	resize_trabajo();
});

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
		width_total = (width_total / 3) - 3;
		$(".trabajo").css('width', width_total);
		$(".trabajo").css('height', width_total);
		$(".title").css('line-height', $(".trabajo").height()+'px');
	}
}

function deslizar_inicio(){
	$('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
}

function deslizar_about_us(){
	$('html, body').animate({
        scrollTop: $("#contenido").offset().top
    }, 2000);
}

function deslizar_portafolio(){
	$('html, body').animate({
        scrollTop: $("#portafolio").offset().top
    }, 2000);
}
