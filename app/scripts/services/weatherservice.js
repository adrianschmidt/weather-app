'use strict';

angular.module('weatherAppApp')
    .service('Weatherservice', function Weatherservice($http) {

        var iconCodes = {
            '01d': 'B',
            '01n': 'C',
            '02d': 'H',
            '02n': 'I',
            '03d': 'N',
            '03n': 'N',
            '04d': 'Y',
            '04n': 'Y',
            '09d': 'Q',
            '09n': 'Q',
            '10d': 'R',
            '10n': 'R',
            '11d': '0',
            '11n': '0',
            '13d': 'W',
            '13n': 'W',
            '50d': 'M',
            '50n': 'M'
        };

        function transformWeather(data) {
            return {
                location: data.name,
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                icon: iconCodes[data.weather[0].icon]
            };
        }

        function getWeather(position, onSuccess) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
            $http({
                method: 'GET',
                url: url
            }).success(function(data) {
                onSuccess(transformWeather(data));
            }).error(function() {
                console.log(arguments);
            });
        }

        function transformForecast(data) {
            var forecast = {
                location: data.city.name
            };

            forecast.days = _.map(data.list, function(day, index) {
                return {
                    temp: Math.round(day.temp.day),
                    description: day.weather[0].description,
                    icon: iconCodes[day.weather[0].icon],
                    day: moment().add('days', index).format('dddd')
                };
            });

            forecast.days.shift();

            return forecast;
        }

        function getForecast(position, onSuccess) {
            var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&mode=json&units=metric&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
            $http({
                method: 'GET',
                url: url
            }).success(function(data) {
                onSuccess(transformForecast(data));
            }).error(function() {
                console.log(arguments);
            });
        }

        return {
            getWeather: getWeather,
            getForecast: getForecast
        };
    });
