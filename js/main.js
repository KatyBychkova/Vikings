$(function(){

	$('.menu__btn').on('click', function() {
		$('.menu__list').toggleClass('menu__list--active')
	});
	

	$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    },
   });

	 $('.heroes__slider-img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.heroes__slider-text',
	  prevArrow: '<button class="slick-btn slick-prev"><img src="images/heroes/arrow-left.png" alt="prev"></button>',
	  nextArrow: '<button class="slick-btn slick-next"><img src="images/heroes/arrow-right.png" alt="next"></button>',
	  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        
      }
    }
    ]

	});
	$('.heroes__slider-text').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.heroes__slider-img',
	  fade: true,
	  arrows : false,
	});

});