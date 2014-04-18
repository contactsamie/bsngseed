'use strict';

angular.module('mngApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

angular.element(document).ready(function () {

});
//parallax
(function ($) {

    // fancybox
    jQuery(".fancybox").fancybox();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    var isMobile = false;

    if (Modernizr.mq('only all and (max-width: 1024px)')) {
        isMobile = true;
    }




    function initNice() {
        if ($(window).innerWidth() <= 960) {
            $('html').niceScroll().remove();
        } else {
            isMobile === true && $("html").niceScroll({zindex: 999, cursorborder: "", cursorborderradius: "2px", cursorcolor: "#191919", cursoropacitymin: .5});
        }
    }

    $(window).load(initNice);
    $(window).resize(initNice);

})(jQuery);