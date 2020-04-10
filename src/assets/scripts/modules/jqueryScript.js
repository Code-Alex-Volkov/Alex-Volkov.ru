// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';



});

/*$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
var tabs_container = $('.testimonial_tab_container');

tabs_container.find($('.tab-item')).hide();
tabs_container.find($('.tab-' + nextSlide)).show();
});*/