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

    // slider mid-section-4-5

    const $commentSlider = $('.comments-slider');
    const $firstSlide = $commentSlider.children().first();
    const $secondSlide = $commentSlider.children().eq(1);
    const $thirdSlide = $commentSlider.children().last();
    $position = 0;

    const $leftCommentSliderBtn = $('.left-comment-btn');
    const $rightCommentSliderBtn = $('.right-comment-btn');


    $firstSlide.fadeIn(1000).css('display', 'flex');
    $secondSlide.css('display', 'none');
    $thirdSlide.css('display', 'none');

    function slide(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        if (($position) === 0) {
            $firstSlide.fadeIn(1000).css('display', 'flex');
            $secondSlide.css('display', 'none');
            $thirdSlide.css('display', 'none');
        } else if (($position) === 1 || ($position) === -2) {
            $firstSlide.css('display', 'none');
            $secondSlide.fadeIn(1000).css('display', 'flex');
            $thirdSlide.css('display', 'none');
        } else if (($position) === 2 || ($position) === -1) {
            $firstSlide.css('display', 'none');
            $secondSlide.css('display', 'none');
            $thirdSlide.fadeIn(1000).css('display', 'flex');
        }
    }

    function rightCommentButton() {
        const widthNext = $rightCommentSliderBtn.outerWidth();
        time = 500;
        $rightCommentSliderBtn.on('click', function () {
            $position += 1;
            if ($position === 3) {
                $position = 0;
            }
            slide();
        });

    };

    function leftCommentButton() {
        const widthNext = $leftCommentSliderBtn.outerWidth();
        time = 500;
        $leftCommentSliderBtn.on('click', function () {
            $position -= 1;
            if ($position === 3 || $position === -3) {
                $position = 0;
            }
            slide();
            console.log($position);
        });
    };

    // slider mid-section-6-7

    const $otherCommentSlider = $('.other-comments-slider');
    const $firstComment = $otherCommentSlider.children().first();
    const $secondComment = $otherCommentSlider.children().eq(1);
    const $thirdComment = $otherCommentSlider.children().last();
    $position = 0;

    const $leftOtherCommentSliderBtn = $('.left-other-btn');
    const $rightOtherCommentSliderBtn = $('.right-other-btn');


    $firstComment.fadeIn(1000).css('display', 'flex');
    $secondComment.css('display', 'none');
    $thirdComment.css('display', 'none');

    function slideOtherComment(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        if (($position) === 0) {
            $firstComment.fadeIn(1000).css('display', 'flex');
            $secondComment.css('display', 'none');
            $thirdComment.css('display', 'none');
        } else if (($position) === 1 || ($position) === -2) {
            $firstComment.css('display', 'none');
            $secondComment.fadeIn(1000).css('display', 'flex');
            $thirdComment.css('display', 'none');
        } else if (($position) === 2 || ($position) === -1) {
            $firstComment.css('display', 'none');
            $secondComment.css('display', 'none');
            $thirdComment.fadeIn(1000).css('display', 'flex');
        }
    }

    function rightOtherCommentButton() {
        const widthNext = $rightCommentSliderBtn.outerWidth();
        time = 500;
        $rightOtherCommentSliderBtn.on('click', function () {
            $position += 1;
            if ($position === 3) {
                $position = 0;
            }
            slideOtherComment();
        });

    };

    function leftOtherCommentButton() {
        const widthNext = $leftCommentSliderBtn.outerWidth();
        time = 500;
        $leftOtherCommentSliderBtn.on('click', function () {
            $position -= 1;
            if ($position === 3 || $position === -3) {
                $position = 0;
            }
            slideOtherComment();
            console.log($position);
        });
    };

    // functions start

    counter();
    hamAnimate();
    rightCommentButton();
    leftCommentButton();
    rightOtherCommentButton();
    leftOtherCommentButton();

});
