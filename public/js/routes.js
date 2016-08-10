(function() {
  angular.module('ngmongoblog')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: "/html/views/home.html"
      controller: "HomeController"
    })
    .when('/login', {
      templateUrl: "/html/views/login.html"
      controller: "LoginController"
    })
    .when('/signup', {
      templateUrl: "/html/views/signup.html"
      controller: 
    })
    .when('/profile/:userId', {
      templateUrl: "/html/views/profile.html"
    })
    .when('/post/:postId', {
      templateUrl: "/html/views/post.html"
    })
    .when('/create', {
      templateUrl: "/html/views/post-create.html"
    })
    .when('/edit/:postId', {
      templateUrl: "/html/views/post-edit.html"
    })
    .otherwise({
      redirectTo: '/'
    });

  }


}());
