angular.module('ngmongoblog')
       .directive('post', function(){
         return{
           restrict: "E",
           scope: {
             post: "="
           },
           templateUrl: "/html/post.html"
         };
       })
