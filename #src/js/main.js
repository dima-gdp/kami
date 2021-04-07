$(document).ready(function () {

	objectFitImages();
	AOS.init()

	const slidersTabs = document.querySelectorAll('.tabs-materials__slider');


	slidersTabs.forEach(function (el) {

		const slider_1 = new Swiper(el, {

			slidesPerView: 4,
			spaceBetween: 20,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			navigation: {
				nextEl: el.nextElementSibling.querySelector('.arrow-right'),
				prevEl: el.nextElementSibling.querySelector('.arrow-left'),
			},
			pagination: {
				el: el.nextElementSibling.querySelector('.control-tabs__pagination'),
				type: 'bullets',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				375: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				450: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				630: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				900: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
			}
		});
	})

	// Табы
	function tabs(buttonsList, wrapper, tabBlock) {
		$(buttonsList).on('click', 'li:not(.active)', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
		})
	}

	tabs('.tabs-materials__buttons', '.tabs-materials', '.tabs-materials__block')


	const chooseSlider = new Swiper('.choose__slider', {

		slidesPerView: 4,
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		loop: false,
		navigation: {
			nextEl: '.choose__right',
			prevEl: '.choose__left',
		},
		pagination: {
			el: '.choose__pagination',
			type: 'bullets',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1300: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});


	const projectSlider = new Swiper('.projects__slider', {

		slidesPerView: 1,
		spaceBetween: 40,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		loop: false,
		navigation: {
			nextEl: '.projects__right',
			prevEl: '.projects__left',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	653: {
		// 		slidesPerView: 2,
		// 	},
		// 	1130: {
		// 		slidesPerView: 3,
		// 	},
		// 	1340: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 30,
		// 	}
		// }
	});

	// function toggleTabs(top, bottom, topActive) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(topActive)) {
	// 			text.stop().slideUp();
	// 			$(this).removeClass(topActive)
	// 		}
	// 		else {
	// 			$(this).addClass(topActive)
	// 			text.stop().slideDown();
	// 		}
	// 	})
	// }
	// function mobileSlider() {
	// 	if ($(window).innerWidth() <= 1100) {
	// 		slider_product_main = new Swiper('.new__slider', {
	// 			slidesPerView: 2,
	// 			spaceBetween: 40,
	// 			navigation: {
	// 				nextEl: '.new-slider--prev',
	// 				prevEl: '.new-slider--next',
	// 			},
	// 			breakpoints: {
	// 				320: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				376: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				630: {
	// 					slidesPerView: 2,
	// 					spaceBetween: 45,
	// 				},
	// 			}
	// 		});
	// 	}

	// 	else {
	// 		if ($('.new__slider').hasClass('swiper-container-initialized')) {
	// 			slider_catalog.destroy();
	// 		}
	// 	}
	// }

	// Fancy-box

	$('[data-src="#modal-polit"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	$('[data-src="#modal-call"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	// $('[data-fancybox="gal"]').fancybox({
	// backFocus: false,
	// autoFocus: false,
	// hash: false,
	// });

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

	const mobMenu = $('.menu')
	const burger = $('.menu__btn')
	// Menu-burger
	burger.click(function () {
		mobMenu.toggleClass('active')
	})


	$(document).click(function (ev) {
		if (!ev.target.closest('.menu__btn')) {
			mobMenu.removeClass('active')
		}
	})


	$('.anchor').click(function (ev) {
		let anchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(anchor).offset().top
		}, 600);
	});

	// Яндекс карта
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map(getMap, {
	// 		center: [52.05693880953456, 118.68705543322154],
	// 		zoom: 4
	// 	});

	// 	var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
	// 		hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
	// 		balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
	// 	},
	// 		{
	// 			preset: 'islands#redIcon',
	// 			iconLayout: 'default#image',
	// 			iconImageSize: [20, 28],
	// 			iconImageOffset: [-19, -52]
	// 		});

	// 	myMap.geoObjects.add(myPlacemark);
	// });


	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });





});