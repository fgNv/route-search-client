(function(angular) {

    angular.module('app').controller('ResultController', resultController);

    resultController.$inject = ['$stateParams', '$http'];

    function resultController($stateParams, $http) {
        var vm = this;

        vm.data = [];

        searchRoutes().then(function(response) {
            vm.data = response.data;
        });

        function searchRoutes() {
            var queryString = '?';

            queryString += "currency=" + encodeURIComponent($stateParams.currency) + "&";
            queryString += "oName=" + encodeURIComponent($stateParams.origin) + "&";
            queryString += "dName=" + encodeURIComponent($stateParams.destination) + "&";
            queryString += "oKind=" + encodeURIComponent($stateParams.originType) + "&";
            queryString += "dKind=" + encodeURIComponent($stateParams.destinationType);

            return $http.get("https://rome2rio12.p.mashape.com/Search" + queryString, {
                headers: {'X-Mashape-Key': 'w5nEKt8V0Qmsh1aN6wuExH3rdYeqp1E1Op5jsnYmilSvBJ94Jq'}
            });
        }
    }

})(angular);