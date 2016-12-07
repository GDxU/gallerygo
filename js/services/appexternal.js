/**
 * Created by hesk on 16年12月6日.
 */

angular.module('app')

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
    Servica.localConvertTr = ($stateParams) => {
      let tag = $stateParams._lang == null ? "cn" : $stateParams._lang, final_lang = "";
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
          .parent(angular.element(document.querySelector('#content')))
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
          console.log("androidapi defined? ", Androidapi);
          if (angular.isDefined(Androidapi)) {
            console.log("arg.docType defined? ", arg.docType);
            if (arg.docType == "me_id") {
              Androidapi.uploadDoc(arg.docType, arg.name, arg.idcard);
            }

            if (arg.docType == "companynamecard") {
              Androidapi.uploadDoc(arg.docType, arg.comname, arg.comregid);
            }

            if (arg.docType == "auth_artist_id") {
              Androidapi.uploadDoc(arg.docType, arg.authorizer_name, arg.authorizer_id);
            }

            if (arg.docType == "companyreg") {
              Androidapi.uploadDoc(arg.docType, arg.comname, arg.comregid);
            }

          }

          break;
        default:
          break;
      }

    };
    return Servica;
  })


;