'use strict';

angular.module('weatherAppApp')
    .controller('MainCtrl', ['$scope', 'locationService',
        function($scope, locationService) {

            $scope.geolocationEnabled = locationService.hasGeolocation();
            $scope.locationLoaded = false;

            function onLocationLoaded(position) {
                $scope.locationLoaded = true;
                console.log(position);
                $scope.$apply()
            }

            locationService.getLocation(onLocationLoaded);


        }
    ]);
