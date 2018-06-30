angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(inputParams, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: inputParams.query,
          maxResults: inputParams.maxResults || 5,
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).then((results) => {
        callback(results);
      }, (error) => {
        console.log(error);
      });
    };
  });
