'use strict';

/**
 * Created by hesk on 16年12月6日.
 */

angular.module('app').factory('$Servica', function ($http, $q) {

  var googleplayurl = 'https://play.google.com/store/apps/details?id=com.zyntauri.gogallery&hl=zh-TW';
  var detectionuser = 'https://api.userinfo.io/userinfos';
  var conp1 = 'gallerygo/master/configurations.json';
  var conp2 = 'rawgit';
  var conp3 = 'https://cdn.' + conp2 + '.com/GDxU/';

  var Servica = {};
  Servica.getTranslateFile = function () {
    var deferred = $q.defer();
    $http.get('translate.json').then(function (response_good) {
      deferred.resolve(response_good.data.apptranslate);
    }, function (response_fail) {
      deferred.reject(response_fail);
    });
    return deferred.promise;
  };

  Servica.getGeo = function () {
    var deferred = $q.defer();
    $http({ method: 'GET', url: detectionuser }).then(function (response) {
      deferred.resolve(response.data);
    }, function (respf) {
      console.log("error", respf);
    });
    return deferred.promise;
  };

  Servica.getMetaDict = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: conp3 + conp1
    }).then(function (response_good) {
      deferred.resolve(response_good.data);
    }, function (response_fail) {
      deferred.reject(response_fail);
    });
    return deferred.promise;
  };

  Servica.localConvert = function (tag) {
    var final_lang = tag;
    if (tag == "ja") {
      final_lang = "jp";
    }
    if (tag == "zh") {
      final_lang = "cn";
    }
    if (tag == "it") {
      final_lang = "en";
    }
    if (tag == "ko") {
      final_lang = "kr";
    }
    return final_lang;
  };
  Servica.localConvertTr = function ($stateParams) {
    var tag = $stateParams._lang == null ? "cn" : $stateParams._lang,
        final_lang = "";
    console.log("get tag", tag);
    if (tag == "ja") {
      final_lang = "en";
    }
    if (tag == "zh") {
      final_lang = "cn";
    }
    if (tag == "cn") {
      final_lang = "cn";
    }
    if (tag == "it") {
      final_lang = "en";
    }
    if (tag == "ko") {
      final_lang = "en";
    }
    console.log("becomes lang", final_lang);
    return final_lang;
  };

  Servica.checkEmptyFields = function (scope) {
    var result = true;
    for (var h in scope) {
      if (scope[h] == "" || scope[h] == null) {
        result = false;
      }
    }
    return result;
  };

  Servica.popError = function ($mdToast, message) {
    $mdToast.show($mdToast.simple().textContent(message).position('bottom right').hideDelay(3000));
  };
  Servica.popDialog = function ($mdDialog, ev, message) {
    // $mdToast.show($mdToast.simple().textContent(message).position('bottom right').hideDelay(3000));
    $mdDialog.show($mdDialog.alert().parent(angular.element(document.querySelector('#content'))).clickOutsideToClose(true).title('Error').textContent(message).ariaLabel('Alert Error Dialog').ok('OK').targetEvent(ev));
  };
  Servica.nativeAPI = function (request_api_code, arg) {
    console.log(arg.docType);
    switch (request_api_code) {
      /**
       * android photo document uploads
       */
      case 1:
        if (angular.isDefined(androidapi)) {
          if (arg.docType == "me_id") {
            androidapi.uploadDoc(arg.docType, arg.name, arg.idcard);
          }

          if (arg.docType == "companynamecard") {
            androidapi.uploadDoc(arg.docType, arg.comname, arg.comregid);
          }

          if (arg.docType == "auth_artist_id") {
            androidapi.uploadDoc(arg.docType, arg.authorizer_name, arg.authorizer_id);
          }

          if (arg.docType == "companyreg") {
            androidapi.uploadDoc(arg.docType, arg.comname, arg.comregid);
          }
        }

        break;
      default:
        break;
    }
  };
  return Servica;
});

//# sourceMappingURL=appexternal-compiled.js.map