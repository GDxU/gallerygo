/**
 * Created by hesk on 16年12月6日.
 */

angular.module('app')
  .config(['LoopBackResourceProvider', '$mdThemingProvider', function (LoopBackResourceProvider, $mdThemingProvider) {
    //LoopBackResourceProvider.setUrlBase("http://localhost:3000/api");
    LoopBackResourceProvider.setUrlBase("http://farm.heskeyo.com/api");
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        'default': '400', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('amber', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
      });
  }])
  .factory('$Servica', ($http, $q)=> {
    const googleplayurl = 'https://play.google.com/store/apps/details?id=com.zyntauri.gogallery&hl=zh-TW';
    const detectionuser = 'https://api.userinfo.io/userinfos';
    const conp1 = 'gallerygo/master/configurations.json';
    const conp2 = 'rawgit';
    const conp3 = 'https://cdn.' + conp2 + '.com/GDxU/';
    const Servica = {};

    Servica.getTranslateFile = ()=> {
      var deferred = $q.defer();
      $http.get('translate.json').then((response_good)=> {
        deferred.resolve(response_good.data.apptranslate);
      }, (response_fail)=> {
        deferred.reject(response_fail);
      });
      return deferred.promise;
    };
    Servica.getGeo = () => {
      var deferred = $q.defer();
      $http({method: 'GET', url: detectionuser}).then((response) => {
        deferred.resolve(response.data);
      }, (respf)=> {
        console.log("error", respf);
      });
      return deferred.promise;
    };
    Servica.getMetaDict = () => {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: conp3 + conp1
      }).then((response_good) => {
        deferred.resolve(response_good.data);
      }, (response_fail)=> {
        deferred.reject(response_fail);
      });
      return deferred.promise;
    };
    Servica.localConvert = (tag) => {
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
    Servica.localConvertTr = ($stateParams) => {
      let tag = $stateParams._lang == null ? "cn" : $stateParams._lang, final_lang = "";
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
    Servica.checkEmptyFields = (scope)=> {
      let result = true;
      for (var h in scope) {
        if (scope[h] == "" || scope[h] == null) {
          result = false;
        }
      }
      return result;
    };
    Servica.popError = ($mdToast, message)=> {
      $mdToast.show($mdToast.simple().textContent(message).position('bottom right').hideDelay(3000));
    };
    Servica.popDialog = ($mdDialog, ev, message)=> {
      // $mdToast.show($mdToast.simple().textContent(message).position('bottom right').hideDelay(3000));
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('body')))
          .clickOutsideToClose(true)
          .title('Error')
          .textContent(message)
          .ariaLabel('Alert Error Dialog')
          .ok('OK')
          .targetEvent(ev)
      );
    };
    Servica.nativeAPI = (request_api_code, arg) => {
      switch (request_api_code) {
        /**
         * android photo document uploads
         */
        case 1:
          if (typeof (window.AnJsApi) != 'undefined') {
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
            if (typeof (window.addImageToField) != 'undefined') {
              console.log("mock pass only");
              window.addImageToField(arg.doctype, "---");
            }
          }
          break;
        case 2:
          if (typeof (window.AnJsApi) != 'undefined') {
            window.AnJsApi.confirm_contract();
          } else {
            if (typeof (window.confirm_contract_after) != 'undefined') {
              console.log("mock pass only");
              window.confirm_contract_after();
            }
          }
          break;
        case 3:
          if (typeof (window.AnJsApi) != 'undefined') {
            //give up and exit
            window.AnJsApi.give_up();
          } else {
            console.log("mock pass only");
          }

          break;
        default:
          break;
      }
    };
    return Servica;
  })
;

