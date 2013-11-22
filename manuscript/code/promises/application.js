function MainController($scope, $q) {
  var defer1 = $q.defer();
  var defer2 = $q.defer();

  var promise1 = defer1.promise;
  var promise2 = defer2.promise;

  promise1.then(function(message) {
    $scope.result1 = 'Resolved with ' + message;
  }, function(reason){
    $scope.result1 = 'Rejected with ' + reason;
  });

  promise2.then(function(message) {
    $scope.result2 = 'Resolved with ' + message;
  }, function(reason){
    $scope.result2 = 'Rejected with ' + reason;
  });

  $q.all([promise1,promise2]).then(function(messages) {
    $scope.resultAll = 'Resolved with ' + messages;
  }, function(reason){
    $scope.resultAll = 'Rejected with ' + reason;
  });

  $scope.resolve1 = function() { defer1.resolve("Success1"); }
  $scope.reject1  = function() { defer1.reject("Error1");  }
  $scope.resolve2 = function() { defer2.resolve("Success2"); }
  $scope.reject2  = function() { defer2.reject("Error2");  }

}