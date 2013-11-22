app = angular.module("DecoratorBeispiel", []);

app.value('angularjs', 'AngularJS');

app.controller('MainController', function($scope, angularjs) {
  $scope.angularjs = angularjs;
});

app.config(function($provide) {
  $provide.decorator('angularjs', function($delegate) {
    return $delegate + ' macht Webentwicklung einfach';
  });
  $provide.decorator('angularjs', function($delegate) {
    return $delegate + ' und elegant';
  });
});
