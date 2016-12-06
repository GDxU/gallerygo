'use strict';

/**
 * Created by hesk on 16年12月6日.
 */
angular.module('app', ['ui.router', 'lbServices', 'ng.deviceDetector', 'ngTouch', 'ngAnimate', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $stateProvider.state('CertView', {
    url: '/certreview/{certid}',
    templateUrl: 'views/my-certs.html',
    controller: 'CertReviewControl'
  });
  // $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg', 128);
  console.log("=config done=");
  //url: '/Preview/:id/:mode/:lang',
  //$urlRouterProvider.otherwise('certreview');
}]).run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    // redirect to login page if not logged in
    if (next.authenticate && !$rootScope.currentUser) {
      console.log("====== state change start =======");
      event.preventDefault(); //prevent current page from loading
      $state.go('forbidden');
    }
  });
}]);

//# sourceMappingURL=certapp-compiled.js.map