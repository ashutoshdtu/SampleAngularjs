'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('nlpsentimentApp'));

  var MainCtrl,
    scope,
    $rootScope,
    $controller,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no queries to start', function () {
  expect(scope.searchHistory.length).toBe(0);
  });

  it('should add query to the list', function () {
  scope.query = 'Test 1';
  scope.searchTopic();
  expect(scope.searchHistory.length).toBe(1);
  });
});
