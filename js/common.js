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


$(function(){
	var static_tamano;
	var static_alto;

	$(".trabajo").click(function(t){
		if($(window).width() > 900){
			var element_id = "#"+t.target.id;
			if(element_id == "#k7" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_tamano = $(element_id).width();
					var margen = $('#pixelbits').offset().left;
					var nuevo_tamano = (static_tamano * 2)+ 5 +'px';

					$("#pixelbits").css('margin-left', margen+'px');

					$(element_id).css('position','absolute');
					$(element_id).css('z-index','7');
					$(element_id).css('transition','width 1s');
					$(element_id).css('width', nuevo_tamano);
					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");
				}
				else{
					$(element_id).css('transition','width 1s');
					$(element_id).css('width',static_tamano+'px');
			
					setTimeout(function(){
						$(element_id).css('position','relative');
						$(element_id).css('z-index','5');
						$("#pixelbits").css('margin-left', '0');
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");
					},1000);
				}	
			}
			if(element_id == "#pixelbits" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_alto = $(element_id).height();
					var element_marge = $(element_id).offset().left;
					var margen = $('#lanashuso').offset().left;
					var nuevo_tamano = (static_alto * 2)+ 5 +'px';

					$(element_id).css('margin-left', element_marge +'px');
					$("#lanashuso").css('margin-left', margen +'px');
					$("#k7").css('position','absolute');

					$(element_id).css('position','absolute');
					$(element_id).css('z-index','11');
					$(element_id).css('transition','height 1s');
					$(element_id).css('height', nuevo_tamano);
					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");
				}
				else{

					$(element_id).css('transition','height 1s');
					$(element_id).css('height',static_alto+'px');
					setTimeout(function(){
						$(element_id).css('z-index','5');
						$(element_id).css('position','relative');
						$("#k7").css('position','relative');						
						$("#lanashuso").css('margin-left', '0');
						$(element_id).css('margin-left', '0');						
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");
					},1000);
				}	
			}
			if(element_id == "#lanashuso" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_tamano = $(element_id).width();
					var nuevo_tamano = (static_tamano * 2)+ 5 +'px';

					$(element_id).css('position','absolute');
					$(element_id).css('z-index','7');
					$(element_id).css('right','0');
					$("#pixelbits").css('margin-right','10px');

					$(element_id).css('transition','width 1s');
					$(element_id).css('width', nuevo_tamano);

					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");
				}
				else{
					$(element_id).css('transition','width 1s');
					$(element_id).css('width',static_tamano+'px');

					setTimeout(function(){
						$("#pixelbits").css('margin-right','0px');
						$(element_id).css('position','relative');
						$(element_id).css('z-index','5');
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");
					},1000);
				}	
			}
			if(element_id == "#ingear" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_tamano = $(element_id).width();
					var margen = $('#legben').offset().left;
					var nuevo_tamano = (static_tamano * 2)+ 5 +'px';

					$("#legben").css('margin-left', margen+'px');

					$(element_id).css('position','absolute');
					$(element_id).css('z-index','7');
					$(element_id).css('bottom','0');
					$(element_id).css('left','0');

					$(element_id).css('transition','width 1s');
					$(element_id).css('width', nuevo_tamano);
					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");

				}
				else{
					$(element_id).css('transition','width 1s');
					$(element_id).css('width',static_tamano+'px');

					setTimeout(function(){
						$(element_id).css('position','relative');
						$(element_id).css('z-index','5');
						$("#legben").css('margin-left', '0');
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");						
					},1000);
				}	
			}
			if(element_id == "#legben" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_alto = $(element_id).height();
					var element_marge = $(element_id).offset().left;
					var margen = $('#verduleriaencasa').offset().left;
					var nuevo_tamano = (static_alto * 2)+ 5 +'px';

					$(element_id).css('margin-left', element_marge +'px');
					$("#verduleriaencasa").css('margin-left', margen +'px');
					$("#ingear").css('position','absolute');
					$("#ingear").css('bottom','0');
					$("#ingear").css('left','0');

					$(element_id).css('position','absolute');
					$(element_id).css('bottom','0');
					$(element_id).css('z-index','11');
					$(element_id).css('transition','height 1s');
					$(element_id).css('height', nuevo_tamano);
					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");
				}
				else{
					$(element_id).css('transition','height 1s');
					$(element_id).css('height',static_alto+'px');
					setTimeout(function(){
						$(element_id).css('z-index','5');
						$(element_id).css('position','relative');
						$("#ingear").css('position','relative');						
						$("#verduleriaencasa").css('margin-left', '0');
						$(element_id).css('margin-left', '0');						
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");
					},1000);
				}	
			}
			if(element_id == "#verduleriaencasa" && !$(element_id).hasClass('no_agrandar')){
				if(!$(element_id).hasClass("grande")){
					static_tamano = $(element_id).width();
					var nuevo_tamano = (static_tamano * 2)+ 5 +'px';

					$(element_id).css('position','absolute');
					$(element_id).css('z-index','7');
					$(element_id).css('right','0');
					$("#legben").css('margin-right','10px');

					$(element_id).css('transition','width 1s');
					$(element_id).css('width', nuevo_tamano);

					$(element_id).addClass("grande");
					$(".trabajo").addClass("no_agrandar");
					$(element_id).removeClass("no_agrandar");
				}
				else{
					$(element_id).css('transition','width 1s');
					$(element_id).css('width',static_tamano+'px');

					setTimeout(function(){
						$("#legben").css('margin-right','0px');
						$(element_id).css('position','relative');
						$(element_id).css('z-index','5');
						$(element_id).removeClass("grande");
						$(".trabajo").removeClass("no_agrandar");
					},1000);
				}	
			}
		}
		
	});
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
		var height_total = ($('#portafolio').height())/2;
		$(".trabajo").css('width', width_total);
		$(".trabajo").css('height', height_total);
		$(".title").css('line-height', $(".trabajo").height()+'px');
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