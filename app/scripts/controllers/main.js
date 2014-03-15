'use strict';

angular.module('weatherAppApp')
    .controller('MainCtrl', ['$scope', 'Locationservice', 'Weatherservice',
        function($scope, Locationservice, Weatherservice) {

            $scope.geolocationEnabled = Locationservice.hasGeolocation();
            $scope.locationLoaded = false;
            $scope.weatherLoaded = false;
            $scope.weather = {};

            function onWeatherLoaded(weather) {
                $scope.weather = weather;

                $scope.weatherLoaded = true;
            }

            function onLocationLoaded(position) {
                Weatherservice.getWeather(position, onWeatherLoaded);

                $scope.locationLoaded = true;
            }

            if ($scope.geolocationEnabled) {
                Locationservice.getLocation(onLocationLoaded);
            }

        }
    ]);
