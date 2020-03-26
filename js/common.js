$(document).ready(function () {
    $("[name='phone']").mask("+7 (926) 999-9999");

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
        $('.mobile-search .header__search .header__delete').fadeIn();
        $('.mobile-search .header__search .header__submit').fadeOut();
    })

    $('.mobile-search .header__search .header__delete').click(function () {
        $('.mobile-search').fadeOut();
        $('.result-search__mobile').fadeOut();
        $('.mobile-search .header__search .header__delete').fadeOut();
        $('.mobile-search .header__search .header__submit').fadeIn();
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
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.mega-menu__route.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});

// timer
