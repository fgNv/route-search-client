(function(angular) {
    var app = angular.module('app', ['ui.router']);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        var searchState = {
            name: 'search',
            url: '/',
            templateUrl: '/views/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        };

        var resultState = {
            name: 'result',
            url: '/result/{origin}/{originType}/{destination}/{destinationType}/{currency}',
            templateUrl: '/Views/result.html',
            controller: 'ResultController',
            controllerAs: 'vm'
        };

        $urlRouterProvider.otherwise('/');
        $stateProvider.state(searchState);
        $stateProvider.state(resultState);
    }

    app.config(routerConfig);

})(angular);