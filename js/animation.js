$(function () {

    // devices width    

    const mobile = window.matchMedia("screen and (max-width: 450px)");
    const desktop = window.matchMedia("screen and (min-width: 900px)");
    const tablet = window.matchMedia("screen and (min-width: 451px) and (max-width: 899px)");

    // hover main section

    const slideBarOne = $('.slide-bars').children().first();
    const slideBarTwo = $('.slide-bars').children().eq(1);
    const slideBarThree = $('.slide-bars').children().eq(2);
    const slideBarFour = $('.slide-bars').children().eq(3);

    const barOne = slideBarOne.find('.bar').children().eq(0);
    const barTwo = slideBarTwo.find('.bar').children().eq(1);
    const barThree = slideBarThree.find('.bar').children().eq(2);
    const barFour = slideBarFour.find('.bar').children().eq(3);

    slideBarOne.hover(function () {
        $(this).fadeIn(1000, function () {
            barOne.addClass('color');
        });
    }, function () {
        barOne.removeClass('color');
    });

    slideBarTwo.hover(function () {
        $(this).fadeIn(1000, function () {
            barOne.removeClass('color');
            barTwo.addClass('color');
        });
    }, function () {
        barTwo.removeClass('color');
    });

    slideBarThree.hover(function () {
        $(this).fadeIn(1000, function () {
            barOne.removeClass('color');
            barThree.addClass('color');
        });
    }, function () {
        barThree.removeClass('color');
    });

    slideBarFour.hover(function () {
        $(this).fadeIn(1000, function () {
            barOne.removeClass('color');
            barFour.addClass('color');
        });
    }, function () {
        barFour.removeClass('color');
    });

    // counter mid section 1-2

    let countNumbers = $('.count');

    function counter() {
        countNumbers.each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    /// hamburger animation 

    let hamburger = $('.hamburger');

    function hamAnimate() {
        hamburger.on("click", function () {
            $(this).toggleClass("is-active");
        });
    };

    
    
    
    
    
    
    // functions start
    
    counter();
    hamAnimate();
    

});
