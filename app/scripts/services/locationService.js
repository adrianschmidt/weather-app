'use strict';

angular.module('weatherAppApp')
    .service('Locationservice', function Locationservice() {
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
