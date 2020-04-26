// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';


	/* other */
	$('.nav_btn').click(function(){
		$('.nav_btn').toggleClass('nav-active');
		$('.site_nav').toggleClass('side-active');
		$('body').toggleClass('over_hidden');
	});

	//project block slider
	if ($('.project_slider').length) {
		$('.project_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.project_slider_nav'
		});
		$('.project_slider_nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.project_slider',
			dots: false,
			arrows: false,
			//centerMode: false,
			focusOnSelect: true
		});

		$('.project_slider_nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  var tabs_container = $('.project_tab_container');

		  tabs_container.find($('.tab-item')).hide();
		  tabs_container.find($('.tab-' + nextSlide)).show();
		});
	}

	$('.popup-btn').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut(400);
		$('body').removeClass('over_hidden');
	});

});

/*$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
var tabs_container = $('.testimonial_tab_container');

tabs_container.find($('.tab-item')).hide();
tabs_container.find($('.tab-' + nextSlide)).show();
});*/