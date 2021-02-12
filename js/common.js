$(document).ready(function () {
    $("[name='phone']").mask("+7 (999) 999-9999");

    var btn = $('.btn-click-top');

    var height = $('html').height() / 4;

    $(window).scroll(function () {
        if ($(window).scrollTop() > height) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '500');
    });

    $('.mobile-navigation__control-search').on('click', function (e) {
        e.preventDefault();
        $('.mobile-search').fadeIn();
    });

    $('.link-dropdown .link-phone').on('click', function () {
        $('.link-phone').hide();
        $('.link-close').show();
        $('.dropdown-addresses').fadeIn();
    });


    $('.link-dropdown .link-close').on('click', function () {
        $('.link-phone').show();
        $('.link-close').hide();
        $('.dropdown-addresses').fadeOut();
    });

    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.mobile-search .header__search input').click(function () {
        $('.mobile-search .header__search .header__delete').show();
        $('.mobile-search .header__search .header__submit').hide();
    });

    $('.mobile-search .header__search .header__delete').click(function () {
        $('.mobile-search').fadeOut();
        $('.result-search__mobile').fadeOut();
        $('.mobile-search .header__search .header__delete').hide();
        $('.mobile-search .header__search .header__submit').show();
    });

    $('.btn__close').click(function () {
        $('.overlay').fadeOut();
        $('.basket-wrapper').fadeOut();
    });

});

// input search
$(function () {
    $('.header__body .header__search input').keydown(checkInput).keyup(checkInput);
    $('.mobile-search .header__search input').keydown(checkInput2).keyup(checkInput2);
    $('.search-by-letter .search-by-letter__input input').keydown(checkInput3).keyup(checkInput3);
});

function checkInput() {
    if ($('.header__body .header__search input').val() === "") {
        $('.header__submit').removeClass('key');
        $('.result-search').fadeOut();

    } else {
        $('.result-search').fadeIn();
        $('.header__submit').addClass('key');
    }
}


function checkInput2() {
    if ($('.mobile-search .header__search input').val() === "") {
        $('.mobile-search .header__submit').removeClass('key');
        $('.result-search__mobile').fadeOut();


    } else {
        $('.result-search__mobile').fadeIn();
        $('.mobile-search .header__submit').addClass('key');
    }
}

function checkInput3() {
    if ($('.search-by-letter .search-by-letter__input input').val() === "") {
        $('.search-by-letter__submit').removeClass('key');
        $('.result-search__brands').fadeOut();

    } else {
        $('.result-search__brands').fadeIn();
        $('.search-by-letter__submit').addClass('key');
    }
}

// scroll header fixed

$(document).ready(function () {
    // fixed menu

    var navFixed = $(".header__scroll.nofixed, .mobile-navigation.nofixed"),
        navHeight = $('.header__scroll, .mobile-navigation').height();

    if ($(window).scrollTop()) {
        navFixed.addClass("fixed").removeClass("nofixed");
    }

    if (navFixed.length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll < navHeight + 20) {
                navFixed.addClass("nofixed");
                navFixed.removeClass("fixed hidden");
                $('main').removeClass('scrollPadding');
            }
            if (scroll > navHeight) {
                navFixed.addClass("hidden");
            }
            if (scroll > navHeight + 40) {
                navFixed.addClass("fixed");
                navFixed.removeClass("nofixed");
                $('main').addClass('scrollPadding');
            }

        })
    }
});

// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".mega-menu__route").hover(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.mega-menu__route.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});


// hidden list > 1
$('.product-filter .product-filter__item').each(function () {
    if ($(this).find('.filter-item').length > 6) {
        $(this).find('.filter-item').slice(6).hide();
    }
});


// show list all
$('.btn-all__filter').on('click', function (e) {
    e.preventDefault();
    var
        $this = $(this);
    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.find('.text').html('Скрыть дополнительные фильтры');

        $('.filter-item:hidden').slideDown();
    } else {
        $this.removeClass('trigger');
        $this.find('.text').html('Показать еще фильтры');

        $('.filter-item').slice(6).slideUp();
    }
});

// $('.single-item__infos .single-item__years-new ').each(function () {
//     if ($(this).find('.single-item__year').length > 4) {
//         $(this).find('.single-item__year').slice(4).hide();
//     }
// });


// $('.btn-all-val').on('click', function (e) {
//     e.preventDefault();
//     let
//         $this = $(this),
//         $content = $(this).parent('.single-item__years-new').find('.single-item__year');
//
//
//     if(!$this.hasClass('trigger')){
//         $this.addClass('trigger');
//         $this.html('Свернуть');
//
//         $content.slideDown();
//     } else {
//         $this.removeClass('trigger');
//         $this.html('Еще объемы');
//
//         $content.slice(4).slideUp();
//     }
// });

// $('.links-more').on('click', function (e) {
//     e.preventDefault();
//     let $this = $(this),
//         $content = $(this).parent().find('.block-toggle__content');
//
//     if(!$this.hasClass('trigger')){
//         $this.addClass('trigger');
//         $this.html('Скрыть подробности');
//
//
//         $content.addClass('open');
//     } else {
//         $this.removeClass('trigger');
//         $this.html('Узнать больше');
//
//         $content.removeClass('open');
//     }
// });

$('.links-load-text').on('click', function (e) {
    e.preventDefault();
    let $this = $(this),
        $content = $(this).parent('.page__desc-new');

    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('скрыть');


        $content.addClass('open');
    } else {
        $this.removeClass('trigger');
        $this.html('подробнее');

        $content.removeClass('open');
    }
});
// show list all


$('.header__profile-user').hover(function () {
    $(this).toggleClass('open');
});

$('.header__profile-user__mobile').click(function () {
    $(this).toggleClass('open');
});

$('.breadcrumbs__item-dropdown').hover(function () {
   $(this).toggleClass('open');
});

$('.main__select').selectmenu();

$('.date-box').on('click', function () {
   $('.date-box').removeClass('date-box__active');
   $(this).addClass('date-box__active');
});


$('.slider-range').slider({
    range: true,
    min: 0,
    max: 12500,
    values: [0, 1000],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2").val(ui.values[1]);
    }
});

$(".dec1").val($(".slider-range").slider("value"));
$(".dec2").val($(".slider-range").slider("value"));

(function($){
    $(window).on("load",function(){
        $(".mCustomScrollbar").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function () {
    $(".js-tab-trigger").click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});


$('.btn-close-tooltip').click(function () {
    $(this).parents('.tooltip-wrapper').fadeOut();
});

$('.filter-item__wrapper li').click(function () {
    $('.filter-item__wrapper li').removeClass('click');
   $(this).toggleClass('click');
});


$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});

$('.btn-loader').click(function () {
    $('.preloader-catalog').fadeIn().end().delay(3000).fadeOut('slow');
});
