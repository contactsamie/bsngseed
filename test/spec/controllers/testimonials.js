'use strict';

describe('Controller: TestimonialsCtrl', function () {

  // load the controller's module
  beforeEach(module('mngApp'));

  var TestimonialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialsCtrl = $controller('TestimonialsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
