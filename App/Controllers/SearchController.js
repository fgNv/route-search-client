(function(angular) {

    angular.module('app').controller('SearchController', searchController);

    searchController.$inject = ['$state'];

    function searchController($state) {
        var vm = this;

        vm.targetTypeOptions = ['city', 'airport'];

        vm.currencyOptions = ['BRL', 'USD']; 

        vm.request = {};

        vm.submit = function() {
            $state.go('result', {
                'origin': vm.request.origin,
                'originType': vm.request.originType,
                'destination': vm.request.destination,
                'destinationType': vm.request.destinationType,
                'currency': vm.request.currency
            });
        }
    }

})(angular);