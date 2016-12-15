(function(angular) {
    var app = angular.module('app', ['ui.router']);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        var searchState = {
            name: 'search',
            url: '/',
            templateUrl: './Views/search.html'
        }

        var resultState = {
            name: 'result',
            url: '/result',
            templateUrl: './Views/result.html'
        }

        $stateProvider.state(searchState);
        $stateProvider.state(resultState);
    }

    app.config(routerConfig);

})(angular);