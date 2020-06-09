$(document).ready(function () {

$('#button').click(function () {
    $('#modal').addClass('modal_active');
});
    $('#close').click(function () {
        $('#modal').removeClass('modal_active');
    });



       $('#up').click(function () {
           $('html,body').animate({scrollTop:0},600)
       });
    $('#down').click(function () {
        $('html,body').animate({scrollTop:$(document).height()-$(window).height()},600)
    });

        $('.slider').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.arrows__left'),
            nextArrow:$('.arrows__right'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },

        ]
        });
});