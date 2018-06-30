angular.module('video-player')
  .controller('AppCtrl', function($scope, youTube) {
    this.searchResults = (query) => {
      youTube.search({
        query: query
      }, (results) => {
        this.currentVideo = results.data.items[0];
        this.videos = results.data.items;
      });
    };
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.currentVideo = undefined;
    this.videos = undefined;
  })
  .component('app', {
    controller: 'AppCtrl',
    template: `
  <div id="app container" ng-init="$ctrl.searchResults('javascript')">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search result="$ctrl.searchResults"></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="$ctrl.currentVideo"></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" on-click="$ctrl.selectVideo"></video-list>
      </div>
    </div>
  </div>
  `
  });