(function () {
    'use strict';
    angular.
    module('restaurantUi').
    component('restaurantUi', {
        templateUrl: 'restaurant-ui/restaurant-ui.template.html',
        controller: function restaurantuiController($http, $scope) {

            restaurantuiController.inject = ['$http', '$scope'];

            var vm = this;

            vm.makeNewReservation = makeNewReservation;

            // function makeNewReservation($scope) {
            //     var jsonHeaderObject={headers:{'Content-Type': 'application/json'}}
            //
            //
            //     $http({
            //         url: 'http://localhost:8080/api/reservations',
            //         method: "POST",
            //         data: {"reservation_id" : vm.reservationID, "user_id" : vm.userID, "mobile" : vm.mobileNumber, "no_of_guests" : vm.noGuests, "arrival_time" : vm.arivalTime, "email" : vm.email
            //         }
            //     })
            //         .then(function(response) {
            //             console.log("Success");
            //             },
            //             function(response) { // optional
            //                 console.log("failed");
            //             });
            // }

            function makeNewReservation () {
                var jsonHeaderObject={headers:{'Content-Type': 'application/json'}}
                console.log("Working!")
                var data ={"reservation_id" : vm.reservationID, "user_id" : vm.userID, "mobile" : vm.mobileNumber, "no_of_guests" : vm.noGuests, "arrival_time" : vm.arivalTime, "email" : vm.email
                };

                $http.post('http://localhost:8080/api/reservations', data, jsonHeaderObject).then(function (response) {
                    console.log("Successfully send!")
                },function (response) {
                    console.log("failed!");
                });
            }
        }
    });
})();