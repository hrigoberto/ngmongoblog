(function() {
    angular.module('ngmongoblog')
           .controller('PostController', PostController);

    PostController.$inject = ['$scope'];

    function PostController($scope){
      $scope.postTitle = "First Post"
      $scope.postBody = "still testing things out at the moment"
    }
}());
