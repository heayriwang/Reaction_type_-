$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('#gnb').toggleClass('on')
    });

    $('#gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            // $('.submenu').hide();
            $(this).parent().siblings().find('.submenu').hide();
            $(this).next().toggle();

        }

    });

    $(window).on('resize', function () {
        if (4(window).width() > 768) {
            $('.submenu').removeAttr('style');
        }

    })




})