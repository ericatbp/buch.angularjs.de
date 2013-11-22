function MainController($scope) {
  $scope.frameworks = ['AngularJS', 'Ember.js', 'Backbone.js'];

  $scope.addFramework = function() {
    $scope.frameworks.push($scope.newFramework);
    $scope.newFramework = '';
  }
}