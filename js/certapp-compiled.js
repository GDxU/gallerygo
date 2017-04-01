'use strict';

/**
 * Created by hesk on 16年12月6日.
 */
angular.module('app', ['ui.router', 'lbServices', 'ng.deviceDetector', 'ngTouch', 'ngAnimate', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']).config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $stateProvider.state('CertView', {
    url: '/certreview/{_lang}/{user_id}',
    templateUrl: 'views/my-certs.html',
    controller: 'CertReviewControl'
  }).state('Contract-1', {
    url: '/contract-1/{_lang}',
    templateUrl: 'views/enter-contract-1.html',
    controller: 'C1'
  }).state('Contract-2', {
    url: '/contract-2/{_lang}',
    templateUrl: 'views/enter-contract-2.html',
    controller: 'C2'
  }).state('Contract-3', {
    url: '/contract-3/{_lang}',
    templateUrl: 'views/enter-contract-3.html',
    controller: 'C3'
  }).state('FinishingCertificationSupport', {
    url: '/cert-support-a/{_lang}/{_data}/{_from}',
    templateUrl: 'views/enter-supportings.html',
    controller: 'CertSupportings'
  }).state('Preview', {
    url: '/preview/:id/:mode/:lang',
    templateUrl: 'views/simple-view.html',
    controller: 'PreviewController'
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