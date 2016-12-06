/**
 * Created by hesk on 16年10月13日.
 */
angular.module('app')

  .controller('CertReviewControl', ['$scope', '$state', '$stateParams', '$http', '$q', '$mdToast',
    function ($scope, $state, $stateParams, $http, $q, $mdToast) {
      var Servica = {};
      Servica.getTranslateFile = function () {
        var deferred = $q.defer();
        $http.get('translate.json').then((response_good)=> {
          deferred.resolve(response_good.data.apptranslate);
        }, function (response_fail) {
          deferred.reject(response_fail);
        });
        return deferred.promise;
      };

      Servica.getTranslateFile().then((translatedata)=> {
        var lang = "cn";
        $scope.radioData[0].detail = translatedata.role_1[lang];
        $scope.radioData[0].label = translatedata.roleName1[lang];
        $scope.radioData[1].detail = translatedata.role_2[lang];
        $scope.radioData[1].label = translatedata.roleName2[lang];
        $scope.radioData[2].detail = translatedata.role_3[lang];
        $scope.radioData[2].label = translatedata.roleName3[lang];

        $scope.str = {
          intro: translatedata.participate_intro[lang],
          title: translatedata.title_cert_review[lang],
          pp: translatedata.selected_cert[lang],
          continuebut: translatedata.continue[lang],
          check: translatedata.errorcheck[lang]
        };

      });

      $scope.str = {
        intro: "",
        title: "",
        pp: "",
        check: "",
        continuebut: ""
      };

      $scope.data = {
        group1: null
      };

      $scope.radioData = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
      ];

      /*  function sanitizePosition() {
       var current = $scope.toastPosition;
       if ( current.bottom && last.top ) current.top = false;
       if ( current.top && last.bottom ) current.bottom = false;
       if ( current.right && last.left ) current.left = false;
       if ( current.left && last.right ) current.right = false;
       last = angular.extend({},current);
       }*/
      $scope.changeSelection = function (val) {
        $scope.data.group1 = val;
      };
      $scope.decidedAndNext = function () {
        console.log($scope.data);
        if ($scope.data.group1 == null || $scope.data.group1 == undefined) {
          console.log("try again1");
          $mdToast.show($mdToast.simple().textContent($scope.str.check).position('top right').hideDelay(3000));
        } else {
          console.log("try continue");
        }
      };
    }])

  /**


   ng-change="changeSelection(program_selected)"
   name="program_selected"


   */
  /*  .directive('mdRadioGroup', function () {
   return {
   restrict: 'E',
   link: function ($scope, $el, $attrs) {
   $el.on('keypress', function (event) {
   if (event.keyCode === 13) {
   var form = angular.element(getClosest($el[0], 'form'));
   form.triggerHandler('submit');
   }
   function getClosest(el, tag) {
   tag = tag.toUpperCase();
   do {
   if (el.nodeName === tag) {
   return el;
   }
   } while (el = el.parentNode);
   return null;
   }
   })
   }
   }
   })*/


  /*.config(function ($mdIconProvider) {
   $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg', 128);
   })*/

  .controller('PreviewController',
    ['$scope', '$stateParams', '$q', '$http', 'Basemap',
      function ($scope, $stateParams, $q, $http, _basemap) {
        var googleplayurl = 'https://play.google.com/store/apps/details?id=com.zyntauri.gogallery&hl=zh-TW';
        var china_apk_url = '';
        var detectionuser = 'https://api.userinfo.io/userinfos';
        var conp1 = 'gallerygo/master/configurations.json';
        var conp2 = 'rawgit';
        var conp3 = 'https://cdn.' + conp2 + '.com/GDxU/';

        var default_path1 = "http://s3.heskeyo.com/basemap/";
        //var default_path2 = "http://s3.heskeyo.com/basemap/";

        setInterval(function () {
          jQuery('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
          jQuery('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
          jQuery('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
          jQuery('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
        }, 1);

        if (installation != undefined) {
          china_apk_url = installation.chinaandroid;
          // console.log("china_url confirmed ", china_apk_url);
        }

        var _itemId = $stateParams.id;
        var _mode = $stateParams.mode;
        var _lang = $stateParams.lang;
        var Servica = {};
        /*  console.log("=============================");
         console.log("id", _itemId);
         console.log("_mode", _mode);
         console.log("_lang", _lang);
         console.log("=============================");*/
        Servica.getGeo = function () {
          var deferred = $q.defer();
          $http({method: 'GET', url: detectionuser}).then(function (response) {
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
        var locale_convert = function (tag) {
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
        var _get_name_tag = function (intput_label) {
          if (_lang == null || _lang == "") {
            return intput_label.cn;
          } else {
            var lang_t = locale_convert(_lang);
            if (intput_label.hasOwnProperty(lang_t)) {
              return intput_label[lang_t];
            } else {
              return intput_label.cn;
            }
          }
        };
        $scope.OnClickFn = {
          installapp: function () {
            // var el = angular.element(document.querySelector('#openGallery .open-icon'));
            this.rotating = !this.rotating;
            Servica.getGeo().then(function (json) {
              console.log(json);
              if (json.country.code == "CN") {
                //  console.log("you are in China");
                window.location.href = china_apk_url;
              } else {
                //  console.log("you are not in", json.country.name);
                window.location.href = googleplayurl;
              }
            }, function (fail) {
              alert("error to detect", fail);
            });
          },
          rotating: false,
          ondetect: function (e) {
            console.log(e);
          }
        }
        ;

        Servica.getMetaDict().then(function (data_config) {
          _basemap.findOne(
            {
              filter: {
                where: {
                  id: _itemId
                }
              }
            }
          ).$promise.then(function (result) {

            var base = result.folder_base_name;
            var shape = parseInt(result.image_meta.shape), _size;
            if (shape == 5 || shape == 2 || shape == 1) {
              _size = result.image_meta.dimension.r + " cm " + "半";
            } else {
              _size = result.image_meta.dimension.x + " x " + result.image_meta.dimension.y + " cm";
            }

            for (var i = 0; i < data_config.shape.length; i++) {
              if (data_config.shape[i].key == shape) {
                _size = _get_name_tag(data_config.shape[i].label) + " " + _size;
              }
            }

            $scope.ThisArticle = {
              meta: result.image_meta,
              size: _size,
              preview: default_path1 + base + "/" + base + ".jpg"
            };

          });

        });

      }]);
