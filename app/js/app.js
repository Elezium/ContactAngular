'use strict';


// Declare app level module which depends on filters, and services
angular.module('ContactManager', [
    'restangular',
    'ui.router',
    'ContactManager.filters',
    'ContactManager.services',
    'ContactManager.directives',
    'ContactManager.controllers'

]).
    config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {


        // API Url (Should be a var... Dev / Prod
        RestangularProvider.setBaseUrl('http://localhost:53554/api');

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html",
                controller: "HomeController"
            })
            .state('ContactManager', {
                url: "/contact",
                templateUrl: "partials/contact.html",
                controller: "ContactController"
            });
//            .state('login', {
//                url: "/login",
//                templateUrl: "partials/login.html",
//                controller: "AuthController"
//            })

    });