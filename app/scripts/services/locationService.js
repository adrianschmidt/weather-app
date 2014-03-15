'use strict';

angular.module('weatherAppApp')
    .service('locationService', function locationService() {
        function hasGeolocation() {
            return 'geolocation' in navigator;
        }

        function getLocation(onSuccess) {
            navigator.geolocation.getCurrentPosition(onSuccess);
        }

        return {
            hasGeolocation: hasGeolocation,
            getLocation: getLocation
        };
    });
