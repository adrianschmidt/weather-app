'use strict';

describe('Service: Locationservice', function () {

  // load the service's module
  beforeEach(module('weatherAppApp'));

  // instantiate service
  var Locationservice;
  beforeEach(inject(function (_Locationservice_) {
    Locationservice = _Locationservice_;
  }));

  it('should do something', function () {
    expect(!!Locationservice).toBe(true);
  });

});
