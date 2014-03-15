'use strict';

angular.module('weatherAppApp')
    .controller('MainCtrl', ['$scope', 'Locationservice', 'Weatherservice',
        function($scope, Locationservice, Weatherservice) {

            $scope.geolocationEnabled = Locationservice.hasGeolocation();
            $scope.locationLoaded = false;
            $scope.weatherLoaded = false;
            $scope.forecastLoaded = false;
            $scope.weather = {};
            $scope.forecast = {};
            var expander = {
                open: false,
                toggle: function() {
                    expander.open = !expander.open;
                }
            };
            $scope.expander = expander;

            function onWeatherLoaded(weather) {
                $scope.weather = weather;

                $scope.weatherLoaded = true;
            }

            function onForecastLoaded(forecast) {
                $scope.forecast = forecast;

                $scope.forecastLoaded = true;
            }

            function onLocationLoaded(position) {
                Weatherservice.getWeather(position, onWeatherLoaded);
                Weatherservice.getForecast(position, onForecastLoaded);

                $scope.locationLoaded = true;
            }

            if ($scope.geolocationEnabled) {
                Locationservice.getLocation(onLocationLoaded);
            }

        }
    ]);
