(function() {
  angular.module('ngmongoblog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject =
                  ['$scope',
                   'UserService',
                   'PostService',
                   'CommentService'
                  ]

  function SimpleController($scope, UserService, PostService, CommentService){
    $scope.message = "Yeaaaahhh!!!";

    var postId = ""
    var updatePost = {}
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
    var postObj = {
      title: "testing createPost",
      author: "57aa5cc0edc0cf1100d8940b",
      body: "How long will this take"
    }
    var updatePost = {
      title: "testing updatePost",
      author: "57aa5cc0edc0cf1100d8940b",
      body: "How long will this take? really?"
    }
    var postId = "57aa6affbe3744110070206b"
    var commentObj = {
      author: "57aa5968edc0cf1100d893fb",
      body: "Halllooo",
      post: "57aa6affbe3744110070206b"
    }
    var updateComment = {
      author: "57aa5968edc0cf1100d893fb",
      body: "I hate hard coding",
      post: "57aa6affbe3744110070206b"
    }
    var commentId1 = "57aa6affbe3744110070206b"
    var commentId2 = "57aba74f4a66fd1100c7c236"
    // UserService.getAllUsers()
    //            .then(function(response){
    //              console.log(response, 'got all users');
    //            });
    // UserService.createUser(userObj)
    //            .then(function(response){
    //              console.log(response, 'created user');
    //            })
    // UserService.getOneUser(userId)
    //            .then(function(response){
    //              console.log(response, "got one user");
    //            });
    // UserService.updateUser(userId, updateInfo)
    //            .then(function(response){
    //              console.log(response, "updated user");
    //            })
    // UserService.deleteUser(userId)
    //            .then(function(response){
    //              console.log(response, "deleted user");
    //            })
    // PostService.getAllPosts()
    //            .then(function(response){
    //              console.log(response, 'got all posts');
    //            });
    // PostService.createPost(postObj)
    //            .then(function(response){
    //              console.log(response, 'created post');
    //            });
    // PostService.getOnePost(postId)
    //            .then(function(response){
    //              console.log(response, "got one post");
    //            })
    // PostService.updatePost(postId, updatePost)
    //            .then(function(response){
    //              console.log(response, "updated post");
    //            })
    // PostService.deletePost(postId)
    //            .then(function(response){
    //              console.log(response, "deleted post");
    //            })
    // CommentService.getAllComments()
    //               .then(function(response){
    //                 console.log(response, "got all comments");
    //               })
    // CommentService.createComment(commentObj)
    //               .then(function(response){
    //                 console.log(response, "created comment");
    //               })
    // CommentService.getAllCommentsByPost(commentId1)
    //               .then(function(response){
    //                 console.log(response, "got one comment");
    //               })
    // CommentService.updateComment(commentId2, updateComment)
    //               .then(function(response){
    //                 console.log(response, "updated comment");
    //               })
    // CommentService.deleteComment(commentId2)
    //               .then(function(response){
    //                 console.log(response, "delete comment");
    //               })





  }
}());
