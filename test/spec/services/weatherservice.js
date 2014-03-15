'use strict';

describe('Service: Weatherservice', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var Weatherservice;
  beforeEach(inject(function (_Weatherservice_) {
    Weatherservice = _Weatherservice_;
  }));

  it('should do something', function () {
    expect(!!Weatherservice).toBe(true);
  });

});
