angular.
module('scotchApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

        $routeProvider.
        when('/home', {
            template: '<restaurant-ui></restaurant-ui>'
        }).
        otherwise('/home');
    }
]);