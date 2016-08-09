(function() {
  angular.module('ngmongoblog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService']

  function SimpleController($scope, UserService){
    $scope.message = "Yeaaaahhh!!!";

    UserService.getAllUsers()
               .then(function(response){
                 console.log(response);
               });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'love@hate.com'
    }
    UserService.createUser(userObj)
               .then(function(response){
                 console.log(response);
               })
  }
}());
