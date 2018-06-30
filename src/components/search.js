angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<'
    },
    template:`
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="newSearch" />
      <button class="btn" ng-click="$ctrl.result(newSearch)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
  });