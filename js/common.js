$(document).ready(function () {
    $("[name='phone']").mask("+7 (999) 999-9999");

    let btn = $('.btn-click-top');

    let height = $('html').height() / 4;

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

    let navFixed = $(".header__scroll.nofixed, .mobile-navigation.nofixed"),
        navHeight = $('.header__scroll, .mobile-navigation').height();

    if ($(window).scrollTop()) {
        navFixed.addClass("fixed").removeClass("nofixed");
    }

    if (navFixed.length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

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

$( document ).ready( function() {
    $( '.mega-menu__favorite-slider' ).each( function() {
        $(this).slick( {
            slidesToShow: 1,
            fade: true,
            appendArrows: $(this).parents('.product-item').find('.mega-menu__favorite-slider-nav'),
            nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
        } );
    } );
} );

// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".mega-menu__route").hover(function () {
        let id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.mega-menu__route.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4

        $('.mega-menu__favorite-slider.slick-initialized').slick("setPosition");
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
    let
        $this = $(this);
    if (!$this.hasClass('trigger')) {
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

    if (!$this.hasClass('trigger')) {
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

(function ($) {
    $(window).on("load", function () {
        $(".mCustomScrollbar").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function () {
    $(".js-tab-trigger").click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

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


$(window).on('load', function () {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});

$('.btn-loader').on("click", function () {
    $('.preloader-catalog').fadeIn().end().delay(3000).fadeOut('slow');
});


// new slider
$('.category-page-slider').slick({
    slideToShow: 1,
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
    appendArrows: '.category-page-slider__nav',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.stock-slider__slick').slick({
    slidesToShow: 3,
    appendArrows: '.stock-slider__buttons-slick',
    variableWidth: true,
    useCSS: false,
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',

});

$('.brands-slider__slick').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: true,
    appendArrows: '.brands-slider__slick-nav',
    appendDots: '.brands-slider__slick-nav',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.hero-slider').slick({
    slideToShow: 1,
    dots: true,
    arrows: false
});

$('.category-information__flickity').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
});

$('.single-item__viewport').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.single-item__thumbs'
});

$('.single-item__thumbs').slick({
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    infinity: false,
    asNavFor: '.single-item__viewport',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: true,
            }
        }
    ]
});

$('.instagramm-slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: true,
    appendArrows: '.instagramm-slider-nav',
    appendDots: '.instagramm-slider-nav',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
});

$('.popular-category-slider').slick({
    slidesToShow: 4,
    dots: true,
    // variableWidth: true,
    appendArrows: '.popular-category-nav',
    appendDots: '.popular-category-nav',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
});

//счетчик слик слайдер с 0//
let pagingInfo = $('.news-slider-nav .counter-slide');
let teamSlider = $('.news-slider');

teamSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo.html('<span class="current">' + prefix + i + ' / ' + '</span>' + ' ' + '<span class="total">' + prefixAll + slick.slideCount + '</span>');
});


$('.news-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendArrows: '.news-slider-nav',
    appendDots: '.news-slider-nav',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
});

let pagingInfo2 = $('.main-home-slider__nav .counter-slide');
let teamSlider2 = $('.main-home-slider');

teamSlider2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo2.html('<span class="current">' + prefix + i + '</span>' + ' ' + '<span class="total">' + prefixAll + slick.slideCount + '</span>');
});


$('.main-home-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendArrows: '.main-home-slider__arrows',
    appendDots: '.main-home-slider__nav',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
});


// category
$(document).ready(function () {
    $(".header__category").hover(function () {
        var t = $(this), e = $(this).attr("data-category");
        $(".mega-menu").addClass("mega-menu--hidden").removeClass("mega-menu--hidden");
        $(".mega-menu__window").addClass("mega-menu__window--hidden").each(function () {
            $(this).attr("data-category") === e && ($(".header__category").removeClass("header__category--current"),
                t.addClass("header__category--current"),
                $(this).removeClass("mega-menu__window--hidden"))
        });
        $('.mega-menu__favorite-slider.slick-initialized').slick("setPosition");
    });
    $(document).mouseup(function (t) {
        var e = $(".header");
        e.is(t.target) || 0 !== e.has(t.target).length || ($(".header__category").removeClass("header__category--current"),
            $(".mega-menu").addClass("mega-menu--hidden"),
            $(".mega-menu__window").addClass("mega-menu__window--hidden"));
    });
    $(".header").mouseleave(function () {
        $(".header__category").removeClass("header__category--current");
        $(".mega-menu").addClass("mega-menu--hidden");
        $(".mega-menu__window").addClass("mega-menu__window--hidden");
    });
});


// mobile menu
$(".mobile-navigation__hamburger").on("click", function (t) {
    t.preventDefault()
    $(this).toggleClass("mobile-navigation__hamburger--active");
    $("body").addClass("fixed");
    $(".mobile-menu").addClass("mobile-menu--active");
    $('.overlay').fadeIn();
})

$('.mobile-menu__close, .overlay').on('click', function () {
    $("body").removeClass("fixed");
    $(".mobile-menu").removeClass("mobile-menu--active");
    $('.overlay').fadeOut();
});

$('.mobile-menu__category').on('click', function () {
    $(this).toggleClass('open').siblings('.mobile-menu__content').slideToggle();
});
// mobile menu end


// masonry
$(window).on('load resize', function () {
    if ($(window).width() < 1100) {
        $('.post-gallery').masonry('destroy');
    }

    if ($(window).width() < 768) {
        $('.products-layout__content').masonry('destroy');
    }
});

$(document).ready(function () {
    $(".post-gallery").masonry({
        columnWidth: 330,
        gutter: 30,
        itemSelector: ".post-gallery__item"
    });

    $(".news-grid__content").masonry({
        gutter: 30,
        itemSelector: ".news-grid__item",
        isFitWidth: !0
    });

});

var _breakpoint = 576,
    $products = $(".products-layout__content").masonry({
        gutter: 0,
        itemSelector: ".products-layout__item",
        isFitWidth: !0
    });

function setColumnWidth(t) {
    var e = 360, i = 290;
    _breakpoint < t ? $products.masonry("option", {columnWidth: e}).masonry() : t <= _breakpoint && $products.masonry("option", {columnWidth: i}).masonry()
}

$(document).ready(function () {
    setColumnWidth(document.documentElement.clientWidth);
});

$(window).resize(function () {
    setColumnWidth(document.documentElement.clientWidth);
    $products.masonry();
});


$(document).ready(function () {
    var t = $(".product-filter__selected"),
        e = $(".product-filter__wrapper"),
        i = e.attr("data-open");
    "false" === i && e.hide();
    $(".product-filter .filter-item input[type=checkbox]").change(function () {
        this.checked ? t.append('<button data-currentFilter="' + $(this).val() + '" class="product-filter__current"><i class="icon-cancel" /> ' + $(this).val() + "</button>") : $('*[data-currentFilter="' + $(this).val() + '"]').remove()
    });
    $(".product-filter__toggle").on("click", function (t) {
        t.preventDefault();
        $(this).toggleClass("product-filter__toggle--no");
        $(this).hasClass("product-filter__toggle--no") ? e.fadeOut() : e.fadeIn()
    })
});

$('.attention_banner button').on('click', function () {
    $('.attention_banner').fadeOut();
});


$('.btn-basket').on('click', function () {
    $('.overlay').fadeIn();
    $('.basket-wrapper').fadeIn();
});

$('.overlay').on('click', function () {
    $('.basket-wrapper').fadeOut();
});

$('.product-filter__toggle-mobile').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.mobile-menu__filter').fadeIn();
});

$('.overlay, .mobile-menu__close').click(function () {
    $('.overlay').fadeOut();
    $('.mobile-menu__filter').fadeOut();
});

$('.checkout-total__detayls-toggle').click(function () {
    $(this).toggleClass('on').siblings('.checkout-total__detayls-list').slideToggle();
});

$('.category-information__item').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});


$('.view-link').click(function (e) {
    e.preventDefault();

    let
        $this = $(this),
        content = $(this).siblings('.single-item__content .seo-content');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.text('Скрыть');

        content.addClass('open');

    } else {
        $this.removeClass('trigger');
        $this.text('посмотреть все');

        content.removeClass('open');
    }
});

$('.single-item__share').click(function (e) {
    e.preventDefault();
    $(this).parents('.box__share').toggleClass('active');
});

$('.single-item__tabs').on('click', 'a:not(.single-item__tab--current)', function (e) {
    e.preventDefault();
    $(this)
        .addClass('single-item__tab--current').siblings().removeClass('single-item__tab--current')
        .closest('div.single-item__content').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-modal__close');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
        $('html, body').addClass('modal-click');
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
        $('html, body').removeClass('modal-click');
    });
});


window.lazySizesConfig = {
    addClasses: true
};



