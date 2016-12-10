'use strict';

/**
 * Created by hesk on 16年12月6日.
 */

angular.module('app').config(['LoopBackResourceProvider', function (LoopBackResourceProvider) {
  // LoopBackResourceProvider.setUrlBase("http://localhost:3000/api");
}]).factory('$Servica', function ($http, $q) {
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
    } else if (tag == "zh") {
      final_lang = "cn";
    } else if (tag == "it") {
      final_lang = "en";
    } else if (tag == "ko") {
      final_lang = "kr";
    } else {
      final_lang = "en";
    }
    return final_lang;
  };
  Servica.localConvertTr = function ($stateParams) {
    var tag = $stateParams._lang == null ? "cn" : $stateParams._lang,
        final_lang = "";
    if (tag == "ja") {
      final_lang = "en";
    } else if (tag == "zh") {
      final_lang = "cn";
    } else if (tag == "cn") {
      final_lang = "cn";
    } else if (tag == "it") {
      final_lang = "en";
    } else if (tag == "ko") {
      final_lang = "en";
    } else {
      final_lang = "en";
    }
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
    switch (request_api_code) {
      /**
       * android photo document uploads
       */
      case 1:
        if (typeof window.AnJsApi != 'undefined') {
          if (arg.doctype == "me_id") {
            window.AnJsApi.uploadDoc(arg.doctype, arg.name, arg.idcard);
          }
          if (arg.doctype == "companynamecard") {
            window.AnJsApi.uploadDoc(arg.doctype, arg.comname, arg.comregid);
          }
          if (arg.doctype == "auth_artist_id") {
            window.AnJsApi.uploadDoc(arg.doctype, arg.authorizer_name, arg.authorizer_id);
          }
          if (arg.doctype == "companyreg") {
            window.AnJsApi.uploadDoc(arg.doctype, arg.comname, arg.comregid);
          }
        } else {
          if (typeof window.addImageToField != 'undefined') {
            console.log("mock pass only");
            window.addImageToField(arg.doctype, "---");
          }
        }
        break;
      case 2:
        if (typeof window.AnJsApi != 'undefined') {
          window.AnJsApi.confirm_contract();
        } else {
          if (typeof window.confirm_contract_after != 'undefined') {
            console.log("mock pass only");
            window.confirm_contract_after();
          }
        }
      default:
        break;
    }
  };
  return Servica;
});

//# sourceMappingURL=appexternal-compiled.js.map