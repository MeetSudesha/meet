$(document).ready(function() {
    $('.slick-1').slick({
        dots: true,
        arrows: true,
        slidestoshow: 1,
        slidestoscroll: 1,
    });
});

// header sticky

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.site-header').addClass("sticky");
    } else {
        $('.site-header').removeClass("sticky");
    }
});

// counting

let a = 0;
$(window).scroll(function() {

    let oTop = $('.section--some ').offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            let $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        a = 1;
    }
});

// Back to top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.backto__top').fadeIn(200);
    } else {
        $('.backto__top').fadeOut(200);
    }
});
$('.backto__top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});