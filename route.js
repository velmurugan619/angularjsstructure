angular.module('myApp')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: './home/home.html',
        controller: 'homeCtrl as home'
    })
    .state('about', {
        url: '/about',
        templateUrl: './about/about.html',
        controller: 'aboutCtrl as about'
    })
    .state('login', {
        url: '/login',
        templateUrl: './login/login.html',
        controller: 'loginCtrl as login'
    })
})