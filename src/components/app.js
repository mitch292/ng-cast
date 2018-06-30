angular.module('video-player')
.controller('AppCtrl', function() {
  this.currentVideo = window.exampleVideoData[0];
  this.videos = window.exampleVideoData;
  this.selectVideo = function(video) {
    this.currentVideo = video;
  }
  this.searchResults = function() {

  }
})
.component('app', {
  bindings: {

  },
  controller: 'AppCtrl',
  template: `
  <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search><h5><em>search</em> component goes here</h5></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="$ctrl.currentVideo"></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" onClick="$ctrl.selectVideo"></video-list>
      </div>
    </div>
  </div>
  `
});
