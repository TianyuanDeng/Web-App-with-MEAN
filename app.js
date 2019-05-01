var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = "Hello orld!";

        $scope.posts = [
            {title: 'p 1', upvotes: 25},
            {title: 'p 2', upvotes: 15},
            {title: 'p 3', upvotes: 51},
            {title: 'p 4', upvotes: 9},
            {title: 'p 5', upvotes: 4}
        ];

        $scope.addPost = function(){
            $scope.posts.push({title: $scope.title, upvotes: 0});
            $scope.title = '';
        };
    }
]);
