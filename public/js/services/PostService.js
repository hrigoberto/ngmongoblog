(function() {
  angular.module('ngmongoblog')
         .factory('PostService', PostService)

  PostService.$inject = ['$http']

  function PostService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/posts/'
    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
      getOnePost: getOnePost,
      updatePost: updatePost,
      deletePost: deletePost
    };
    return service

    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function createPost(postObj){
      return $http.post(baseUrl, postObj)
    }
    function getOnePost(postId){
      return $http.get(baseUrl + postId)
    }
    function updatePost(postId, updatePost){
      return $http.put(baseUrl + postId, updatePost)
    }
    function deletePost(postId){
      return $http.delete(baseUrl + postId)
    }
  }
}());
