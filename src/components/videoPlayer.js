angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  template: `
  <div class="video-player" ng-if="$ctrl.video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src="{{ 'https://www.youtube.com/embed/' + $ctrl.video.id.videoId }}" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{ $ctrl.video.snippet.title }}</h3>
      <div>{{ $ctrl.video.snippet.description }}</div>
    </div>
  </div>
  <h1 ng-if="!$ctrl.video">Please wait...</h1>
  `
});

