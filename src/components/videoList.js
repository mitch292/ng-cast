angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
    },
    template: `
    <ul class="video-list">
      <video-list-entry 
        ng-repeat="video in $ctrl.videos track by $index"
        video="video"
      </video-list-entry>
    </ul>
    `
  });
// .controller('videoListController', function($scope) {
//   $scope.videos = window.exampleVideoData;
//   $scope.onClick = function() {

//   };

// });
