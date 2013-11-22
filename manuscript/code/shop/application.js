shop = angular.module("Shop", []);

shop.config(function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: 'articles.html', controller: ArticlesController }).
    when('/about', { templateUrl: 'about.html' }).
    otherwise({ redirectTo: '/'});
});

shop.factory('Cart', function() {
  var items = [];

  return {
    items: items,
    addArticle: function(article) {
      items.push(article);
    },
    copyItem: function(item) {
      return items.splice(items.indexOf(item), 0, item);
    },
    removeItem: function(item) {
      return items.splice(items.indexOf(item),1);
    },
    sum: function() {
      return items.reduce(function(total, article) { return total + article.price; }, 0);
    }
  };
});

function CartsController($scope, Cart) {
  $scope.cart = Cart;
}

function ArticlesController($scope, $http, Cart) {
  $scope.cart = Cart;
  $http.get('articles.json').then(function(articlesResponse) {
    $scope.articles = articlesResponse.data;
  });
}