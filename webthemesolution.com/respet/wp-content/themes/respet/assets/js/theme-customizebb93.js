(function ($) {
	'use strict';
	/* PORTFOLIO Post Type js */
	$('.portfolio_section_tab').imagesLoaded(function () {
		if ($.fn.isotope) {
			var $portfolio = $('.portfolio_section_tab');
			$portfolio.isotope({
				itemSelector: '.grid-item',
				filter: '*',
				resizesContainer: true,
				layoutMode: 'masonry',
				transitionDuration: '0.8s'
			});
			$('.portfolio_category_menu li').on('click', function () {

				$('.portfolio_category_menu li').removeClass('active_category_menu');
				$(this).addClass('active_category_menu');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({
					filter: selector,
				});
			});
		};
	});
	
	
	
	   /*----------------------------------------
           go-to-top
        ----------------------------------------*/
        $(document).on('click', '.go-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        });

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.go-to-top');
        if ($(window).scrollTop() > 400) {
            ScrollTop.fadeIn(400);
        } else {
            ScrollTop.fadeOut(400);
        }

    });
	
	
	
	
	
})(jQuery);