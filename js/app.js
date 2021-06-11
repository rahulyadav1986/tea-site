

$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#banner-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

jQuery('.category-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});










