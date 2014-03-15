'use strict';

angular.module('weatherAppApp')
    .service('Weatherservice', function Weatherservice($http) {

        function transformWeather(data) {
            return {
                location: data.name,
                temperature: data.main.temp
            };
        }

        function getWeather(position, onSuccess) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
            $http({
                method: 'GET',
                url: url
            }).success(function(data) {
                onSuccess(transformWeather(data));
            }).error(function() {
                console.log(arguments);
            });
        }

        return {
            getWeather: getWeather
        };
    });
