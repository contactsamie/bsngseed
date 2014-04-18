'use strict';

angular
  .module('mngApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/testimonials', {
        templateUrl: 'views/testimonials.html',
        controller: 'TestimonialsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
//jQuery to collapse the navbar on scroll

if(typeof $!=='undefined'){
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });


}
