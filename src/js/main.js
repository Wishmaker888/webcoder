/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/tether/dist/js/tether.js
//= ../../bower_components/tether-drop/dist/js/drop.js
//= ../../bower_components/tether-tooltip/dist/js/tooltip.js

'use script';

(function($){
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            animateOut: 'slideOutLeft',
            animateIn: 'flipInY',
            smartSpeed: 450
        });

        $('.form__submit-button').hover(function() {
            $(this).toggleClass('pulse');
        })
    });
})(jQuery);