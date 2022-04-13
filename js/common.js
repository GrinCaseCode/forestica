$(document).ready(function() {


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}




/*slider news*/
const slides2 = document.querySelectorAll(".swiper-news .swiper-slide");
const slideCount2 = slides2.length;

const swiper2 = new Swiper(".swiper-news", {
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination_news",
		dynamicBullets: true,
	},


  // Navigation arrows
  navigation: {
  	nextEl: ".swiper-arrows_news .swiper-button-next",
  	prevEl: ".swiper-arrows_news .swiper-button-prev" },

  });

/*slider news*/
const slides3 = document.querySelectorAll(".swiper-catalog .swiper-slide");
const slideCount3 = slides3.length;

const swiper3 = new Swiper(".swiper-catalog", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-catalog .swiper-pagination",
		dynamicBullets: true,
	},


  // Navigation arrows
  navigation: {
  	nextEl: ".swiper-catalog .swiper-button-next",
  	prevEl: ".swiper-catalog .swiper-button-prev" },
  	breakpoints: {
    // when window width is >= 320px
    480: {
    	slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
    	slidesPerView: 3,
    },
    // when window width is >= 640px
    992: {
    	slidesPerView: 4,
    }
}

});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".modal-header_search").fadeOut(200);
		$(".modal-header_location").fadeOut(200);
		if ($(".modal-header_menu").is(":hidden")) {
			$(".modal-header_menu").fadeIn(200);
			$(".header").addClass("header_menu");
		} else {
			$(".modal-header_menu").fadeOut(200);
			$(".header").removeClass("header_menu");
		}
	});


	$(".btn-search").click(function() {
		$(".modal-header_menu").fadeOut(200);
		$(".modal-header_location").fadeOut(200);
		if ($(".modal-header_search").is(":hidden")) {
			$(".modal-header_search").fadeIn(200);
			$(".header").addClass("header_menu");
		} else {
			$(".modal-header_search").fadeOut(200);
			$(".header").removeClass("header_menu");
		}
	});

	$(".location").click(function(e) {
		e.preventDefault();
		$(".modal-header_menu").fadeOut(200);
		$(".modal-header_search").fadeOut(200);
		if ($(".modal-header_location").is(":hidden")) {
			$(".modal-header_location").fadeIn(200);
			$(".header").addClass("header_menu");
		} else {
			$(".modal-header_location").fadeOut(200);
			$(".header").removeClass("header_menu");
		}
	});

	$(".close-modal").click(function() {
		$(this).parent().parent().parent().parent(".modal-header").fadeOut(200);
		$(".header").removeClass("header_menu");
	});

	$(".search-form input").on('keyup blur', function (e) {
		if($(this).val()){
			$(".search-dropdown").fadeIn(200);
		}
		else {
			$(".search-dropdown").fadeOut(200);
		}
	});

	$(".search-dropdown__value").click(function() {
		var value_search = $(this).html();
		$(".search-form input").val(value_search);
		$(".search-dropdown").fadeOut(200);
		$(".results-wrap").fadeIn(200);
	});

	$(".clear-search").click(function() {
		$(".search-form input").val("");
	});


	//слайдер

	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	$(".btn-basket").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});


	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).siblings(".footer__content").slideToggle(200);
			});


		}
	}

	$(".link-more_checkboxes").click(function(e) {
		e.preventDefault();
		if ($(this).prev(".list-checkboxes").find(".checkbox:nth-child(n+3)").is(":hidden")) {
			$(this).prev(".list-checkboxes").find(".checkbox:nth-child(n+3)").slideDown(200);
			$(this).find("span").html("Скрыть");
		} else {
			$(this).prev(".list-checkboxes").find(".checkbox:nth-child(n+3)").slideUp(200);
			$(this).find("span").html("Показать ещё");
		}
	});


$(".title-sidebar").click(function(e) {
		e.preventDefault();
		$(".sidebar-filter").slideToggle(200);
	});


	/*range slider*/

	$('.range-catalog_price').each(function(){
		var $range = $(this).find(".range-catalog__input"),
		$from = $(this).find(".control-input__from"),
		$to = $(this).find(".control-input__to"),
		min = 1500,
		max = 60000;
		$range.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			from: 1500,
			to: 60000,
			prettify_enabled: true,
			onChange: function(data) {
				updateValues()
			}
		});
		 function number_format(num, format) {
        num = (num + "").replace(/(\s)+/g, "");
        return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
    }
		$range = $range.data("ionRangeSlider");
		var updateValues = function() {
			var res = $range.result;
			 $from.val(number_format(res.from, true));
        $to.val(number_format(res.to,true))
		};
		$from.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				from: this.value
			})
		}).on("blur", updateValues);
		$to.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				to: this.value
			})
		}).on("blur", updateValues)
	});
	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

