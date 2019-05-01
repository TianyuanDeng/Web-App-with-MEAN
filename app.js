var app = angular.module('falpperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = "Hello World!";
    }
]);