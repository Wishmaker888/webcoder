/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js

'use script';

(function($){




    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            animateOut: 'slideOutLeft',
            animateIn: 'flipInY',
            smartSpeed: 450
        });
    });
})(jQuery);