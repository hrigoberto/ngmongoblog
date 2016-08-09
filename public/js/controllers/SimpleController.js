(function() {
  angular.module('ngmongoblog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService']

  function SimpleController($scope, UserService){
    $scope.message = "Yeaaaahhh!!!";

    UserService.getAllUsers()
               .then(function(response){
                 console.log(response, 'ggt all users');
               });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'lohaate.com'
    }
    var userId = "57aa5968edc0cf1100d893fb"
    var updateInfo = {
      firstName: 'Big',
      lastName: 'Jon',
      age: 41,
      email: 'lofagadgfe@hate.com'
    }
    UserService.createUser(userObj)
               .then(function(response){
                 console.log(response, 'created user');
               })
    UserService.getOneUser(userId)
               .then(function(response){
                 console.log(response, "got one user");
               });
    UserService.updateUser(userId, updateInfo)
               .then(function(response){
                 console.log(response, "updated user");
               })
    UserService.deleteUser(userId)
               .then(function(response){
                 console.log(response, "deleted user");
               })
   }
}());
