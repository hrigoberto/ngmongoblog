(function() {
  angular.module('ngmongoblog')
         .factory('CommentService', CommentService)

  CommentService.$inject = ['$http']

  function CommentService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/comments/'
    var service = {
      getAllComments: getAllComments,
      createComment: createComment,
      getAllCommentsByPost: getAllCommentsByPost,
      updateComment: updateComment,
      deleteComment: deleteComment
    }
    return service

  function getAllComments(){
    return $http.get(baseUrl);
  }
  function createComment(commentObj){
    return $http.post(baseUrl, commentObj)
  }
  function getAllCommentsByPost(commentId){
    return $http.get(baseUrl + commentId)
  }
  function updateComment(commentId){
    return $http.put(baseUrl + commentId)
  }
  function deleteComment(commentId){
    return $http.delete(baseUrl + commentId)
  }
  }
}());
