angular.module('ngmongoblog')
       .directive('navbar', function(){
         return{
           restrict: "E",
           scope: {
             navbar: "="
           },
           templateUrl: "/html/navbar.html"
         };
       })
