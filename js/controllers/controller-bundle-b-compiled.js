'use strict';

/**
 * Created by hesk on 16年10月13日.
 */
angular.module('app').controller('CertReviewControl', ['$scope', '$state', '$stateParams', '$http', '$q', '$Servica', '$mdToast', function ($scope, $state, $stateParams, $http, $q, $Servica, $mdToast) {
  var lang = void 0;
  $Servica.getTranslateFile().then(function (translatedata) {
    var lang = $Servica.localConvertTr($stateParams);
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

  $scope.radioData = [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }];

  $scope.decidedAndNext = function () {
    // console.log($scope.data);
    if ($scope.data.group1 == null || $scope.data.group1 == undefined) {
      $Servica.popError($mdToast, $scope.str.check);
    } else {
      var state_name = 'Contract-' + $scope.data.group1;
      $state.go(state_name, { _lang: $Servica.localConvertTr($stateParams) });
    }
  };
}]).controller('C1', ['$scope', '$state', '$stateParams', '$Servica', '$sce', '$mdDialog', function ($scope, $state, $stateParams, $Servica, $sce, $mdDialog) {

  $Servica.getTranslateFile().then(function (tr_data) {
    var lang = $Servica.localConvertTr($stateParams);
    $scope.str.title_contract_1 = tr_data.title_contract_1[lang];
    $scope.str.enter_your = tr_data.enter_your[lang];
    $scope.str.your_legal_name = tr_data.your_legal_name[lang];
    $scope.str.your_id = tr_data.your_id[lang];
    $scope.str.contract_body = tr_data.contract_body[lang];
    $scope.str.heading_1 = tr_data.heading_1[lang];
    $scope.str.express_disagree = tr_data.express_disagree[lang];
    $scope.str.express_agree = tr_data.express_agree[lang];
    $scope.str.contract_check_box = tr_data.contract_check_box[lang];
    $scope.str.contract_read = tr_data.contract_read[lang];
    $scope.str.erroremptyfield = tr_data.erroremptyfield[lang];
  });

  $scope.str = {
    title_contract_1: "---",
    enter_your: "---",
    your_legal_name: "---",
    your_id: "---",
    contract_body: "---",
    heading_1: "---",
    contract_check_box: "---",
    contract_read: "---",
    erroremptyfield: "error",
    express_disagree: "disagree",
    express_agree: "agree"
  };

  $scope.data = {
    name: "",
    idcard: "",
    agree: ""
  };

  $scope.trustAsHtml = $sce.trustAsHtml;
  $scope.agree = function (ev) {
    console.log("get is now");
    if ($Servica.checkEmptyFields($scope.data)) {
      console.log("get is now 1 ");
    } else {
      $Servica.popDialog($mdDialog, ev, $scope.str.erroremptyfield);
      console.log("get is now 2");
    }
  };
  $scope.disagreeandexit = function () {};
}]).controller('C2', ['$scope', '$state', '$stateParams', '$q', '$http', '$Servica', '$sce', '$mdDialog', function ($scope, $state, $stateParams, $q, $http, $Servica, $sce, $mdDialog) {

  $Servica.getTranslateFile().then(function (tr_data) {
    var lang = $Servica.localConvertTr($stateParams);
    $scope.str.title_contract_2 = tr_data.title_contract_2[lang];
    $scope.str.enter_your = tr_data.enter_your[lang];
    $scope.str.your_legal_name = tr_data.your_legal_name[lang];
    $scope.str.your_id = tr_data.your_id[lang];
    $scope.str.your_authorized_artist = tr_data.your_authorized_artist[lang];
    $scope.str.your_authorized_artist_id = tr_data.your_authorized_artist_id[lang];
    $scope.str.contract_body = tr_data.contract_body[lang];
    $scope.str.heading_2 = tr_data.heading_2[lang];
    $scope.str.express_disagree = tr_data.express_disagree[lang];
    $scope.str.express_agree = tr_data.express_agree[lang];
    $scope.str.contract_check_box = tr_data.contract_check_box[lang];
    $scope.str.contract_read = tr_data.contract_read[lang];
    $scope.str.erroremptyfield = tr_data.erroremptyfield[lang];
  });

  $scope.str = {
    title_contract_2: "---",
    enter_your: "---",
    your_legal_name: "---",
    your_id: "---",
    your_authorized_artist: "---",
    your_authorized_artist_id: "---",
    contract_body: "---",
    heading_2: "---",
    contract_check_box: "---",
    contract_read: "---",
    erroremptyfield: "error",
    express_disagree: "disagree",
    express_agree: "agree"
  };

  $scope.data = {
    name: "",
    idcard: "",
    authorizer_name: "",
    authorizer_id: "",
    agree: ""
  };

  $scope.trustAsHtml = $sce.trustAsHtml;

  $scope.agree = function (ev) {
    if ($Servica.checkEmptyFields($scope.data)) {} else {

      $Servica.popDialog($mdDialog, ev, $scope.str.erroremptyfield);
    }
  };
  $scope.disagreeandexit = function () {};
}]).controller('C3', ['$scope', '$state', '$stateParams', '$q', '$http', '$Servica', '$sce', '$mdDialog', function ($scope, $state, $stateParams, $q, $http, $Servica, $sce, $mdDialog) {

  $Servica.getTranslateFile().then(function (tr_data) {
    var lang = $Servica.localConvertTr($stateParams);
    $scope.str.title_contract_3 = tr_data.title_contract_3[lang];
    $scope.str.enter_your = tr_data.enter_your[lang];
    $scope.str.your_legal_name = tr_data.your_legal_name[lang];
    $scope.str.your_position = tr_data.your_position[lang];
    $scope.str.your_id = tr_data.your_id[lang];
    $scope.str.company_name = tr_data.company_name[lang];
    $scope.str.company_registration_id = tr_data.company_registration_id[lang];
    $scope.str.contract_body = tr_data.contract_body[lang];
    $scope.str.heading_3 = tr_data.heading_3[lang];
    $scope.str.express_disagree = tr_data.express_disagree[lang];
    $scope.str.express_agree = tr_data.express_agree[lang];
    $scope.str.contract_check_box = tr_data.contract_check_box[lang];
    $scope.str.contract_read = tr_data.contract_read[lang];
    $scope.str.erroremptyfield = tr_data.erroremptyfield[lang];
  });

  $scope.str = {
    title_contract_3: "---",
    enter_your: "---",
    your_legal_name: "---",
    your_id: "---",
    contract_body: "---",
    your_position: "---",
    heading_3: "---",
    contract_check_box: "---",
    contract_read: "---",
    company_name: "---",
    erroremptyfield: "error",
    company_registration_id: "---",
    express_disagree: "disagree",
    express_agree: "agree"
  };

  $scope.data = {
    name: "",
    idcard: "",
    comname: "",
    composition: "",
    comregid: "",
    agree: ""
  };

  $scope.trustAsHtml = $sce.trustAsHtml;

  $scope.agree = function (ev) {
    if ($Servica.checkEmptyFields($scope.data)) {} else {
      $Servica.popDialog($mdDialog, ev, $scope.str.erroremptyfield);
    }
  };
  $scope.disagreeandexit = function () {};
}]).controller('PreviewController', ['$scope', '$stateParams', '$q', '$http', 'Basemap', '$Servica', function ($scope, $stateParams, $q, $http, _basemap, $Servica) {
  var googleplayurl = 'https://play.google.com/store/apps/details?id=com.zyntauri.gogallery&hl=zh-TW';
  var china_apk_url = '';
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

  /*  console.log("=============================");
   console.log("id", _itemId);
   console.log("_mode", _mode);
   console.log("_lang", _lang);
   console.log("=============================");*/

  var _get_name_tag = function _get_name_tag(intput_label) {
    if (_lang == null || _lang == "") {
      return intput_label.cn;
    } else {
      var lang_t = $Servica.localConvert(_lang);
      if (intput_label.hasOwnProperty(lang_t)) {
        return intput_label[lang_t];
      } else {
        return intput_label.cn;
      }
    }
  };
  $scope.OnClickFn = {
    installapp: function installapp() {
      // var el = angular.element(document.querySelector('#openGallery .open-icon'));
      this.rotating = !this.rotating;
      $Servica.getGeo().then(function (json) {
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
    ondetect: function ondetect(e) {
      console.log(e);
    }
  };

  $Servica.getMetaDict().then(function (data_config) {
    _basemap.findOne({
      filter: {
        where: {
          id: _itemId
        }
      }
    }).$promise.then(function (result) {

      var base = result.folder_base_name;
      var shape = parseInt(result.image_meta.shape),
          _size;
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

//# sourceMappingURL=controller-bundle-b-compiled.js.map