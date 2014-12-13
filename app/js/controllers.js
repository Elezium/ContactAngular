'use strict';

/* Controllers */

angular.module('ContactManager.controllers', [])
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.myname = "Myself.";

    }])

    .controller('ContactController', ['$scope', 'Restangular', function($scope, Restangular) {
        $scope.where = 'ContactController';


        $scope.contacts = Restangular.all("ContactsAPI").getList().$object;
        console.log($scope.contacts);
}]);







