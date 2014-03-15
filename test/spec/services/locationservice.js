'use strict';

describe('Service: locationService', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var locationService;
  beforeEach(inject(function (_Locationservice_) {
    locationService = _Locationservice_;
  }));

  it('should do something', function () {
    expect(!!locationService).toBe(true);
  });

});
