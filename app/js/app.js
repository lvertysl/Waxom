$(document).ready(function() {

    const swiper = new Swiper('.main-slider', {
        loop: true,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        }
    });
}); 

